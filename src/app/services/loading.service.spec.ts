import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with isLoading as false', () => {
    expect(service.isLoading()).toBe(false);
  });

  it('should set isLoading to true when show is called', () => {
    service.show();
    expect(service.isLoading()).toBe(true);
  });

  it('should set isLoading to false when hide is called after show', () => {
    service.show();
    service.hide();
    expect(service.isLoading()).toBe(false);
  });

  it('should handle multiple show calls', () => {
    service.show();
    service.show();
    expect(service.isLoading()).toBe(true);

    service.hide();
    expect(service.isLoading()).toBe(true);

    service.hide();
    expect(service.isLoading()).toBe(false);
  });

  it('should not go negative when hide is called without show', () => {
    service.hide();
    service.hide();
    expect(service.isLoading()).toBe(false);
  });

  it('should reset loading count to zero', () => {
    service.show();
    service.show();
    service.show();
    expect(service.isLoading()).toBe(true);

    service.reset();
    expect(service.isLoading()).toBe(false);
  });
});
