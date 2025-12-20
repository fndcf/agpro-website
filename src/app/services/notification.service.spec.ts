import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add success notification', () => {
    service.success('Test message');
    expect(service.notifications().length).toBe(1);
    expect(service.notifications()[0].type).toBe('success');
    expect(service.notifications()[0].message).toBe('Test message');
  });

  it('should add error notification', () => {
    service.error('Error message');
    expect(service.notifications().length).toBe(1);
    expect(service.notifications()[0].type).toBe('error');
  });

  it('should add warning notification', () => {
    service.warning('Warning message');
    expect(service.notifications().length).toBe(1);
    expect(service.notifications()[0].type).toBe('warning');
  });

  it('should add info notification', () => {
    service.info('Info message');
    expect(service.notifications().length).toBe(1);
    expect(service.notifications()[0].type).toBe('info');
  });

  it('should remove notification by id', () => {
    service.success('Test message');
    const id = service.notifications()[0].id;
    service.remove(id);
    expect(service.notifications().length).toBe(0);
  });

  it('should auto-remove notification after duration', fakeAsync(() => {
    service.success('Test message', 1000);
    expect(service.notifications().length).toBe(1);
    tick(1000);
    expect(service.notifications().length).toBe(0);
  }));

  it('should handle multiple notifications', () => {
    service.success('Success');
    service.error('Error');
    service.info('Info');
    expect(service.notifications().length).toBe(3);
  });

  it('should assign unique ids to notifications', () => {
    service.success('First');
    service.success('Second');
    const ids = service.notifications().map((n) => n.id);
    expect(ids[0]).not.toBe(ids[1]);
  });
});
