import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardComponent } from './service-card';
import { Service } from '../../models/service.model';

describe('ServiceCardComponent', () => {
  let component: ServiceCardComponent;
  let fixture: ComponentFixture<ServiceCardComponent>;

  const mockService: Service = {
    id: 'test-service',
    title: 'Test Service',
    description: 'Test Description',
    category: 'buildings',
    image: 'assets/images/test.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('service', mockService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the provided service', () => {
    expect(component.service).toEqual(mockService);
  });

  it('should emit imageError when onImageError is called', () => {
    spyOn(component.imageError, 'emit');
    const mockEvent = new Event('error');
    component.onImageError(mockEvent);
    expect(component.imageError.emit).toHaveBeenCalledWith(mockEvent);
  });

  it('should have default fallbackImage', () => {
    expect(component.fallbackImage).toBe('assets/images/colageagpro.gif');
  });

  it('should have default showImage as false', () => {
    expect(component.showImage).toBe(false);
  });
});
