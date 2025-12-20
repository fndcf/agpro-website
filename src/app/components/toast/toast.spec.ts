import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastComponent } from './toast';
import { NotificationService } from '../../services/notification.service';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let notificationService: NotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display notifications from service', () => {
    notificationService.success('Test message');
    fixture.detectChanges();
    expect(component.notifications().length).toBe(1);
  });

  it('should return correct icon for success', () => {
    expect(component.getIcon('success')).toBe('✓');
  });

  it('should return correct icon for error', () => {
    expect(component.getIcon('error')).toBe('✕');
  });

  it('should return correct icon for warning', () => {
    expect(component.getIcon('warning')).toBe('⚠');
  });

  it('should return correct icon for info', () => {
    expect(component.getIcon('info')).toBe('ℹ');
  });

  it('should close notification when close is called', () => {
    notificationService.success('Test message');
    fixture.detectChanges();
    const id = component.notifications()[0].id;
    component.close(id);
    fixture.detectChanges();
    expect(component.notifications().length).toBe(0);
  });

  it('should track notifications by id', () => {
    const notification = { id: 1, message: 'Test', type: 'success' as const, duration: 4000 };
    expect(component.trackByNotification(0, notification)).toBe(1);
  });
});
