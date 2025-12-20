import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { getTranslocoModule } from '../../testing/transloco-testing.module';
import { NotificationService } from '../../services/notification.service';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;
  let notificationService: NotificationService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact, getTranslocoModule()],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Events', () => {
    it('should send email and show success notification on form submit', fakeAsync(() => {
      spyOn(notificationService, 'success');
      const formData = {
        fullName: 'John Doe',
        email: 'john@example.com',
        description: 'Test description',
      };

      component.onFormSubmit(formData as any);

      const req = httpMock.expectOne('/api/send-email.php');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(formData);

      req.flush({ success: true, message: 'Email sent' });
      tick();

      expect(notificationService.success).toHaveBeenCalled();
      expect(component.isSubmitting()).toBeFalse();
    }));

    it('should show error notification on email send failure', fakeAsync(() => {
      spyOn(notificationService, 'error');
      const formData = {
        fullName: 'John Doe',
        email: 'john@example.com',
        description: 'Test description',
      };

      component.onFormSubmit(formData as any);

      const req = httpMock.expectOne('/api/send-email.php');
      req.error(new ErrorEvent('Network error'));
      tick();

      expect(notificationService.error).toHaveBeenCalled();
      expect(component.isSubmitting()).toBeFalse();
    }));

    it('should show error notification on form error', () => {
      spyOn(notificationService, 'error');

      component.onFormError();

      expect(notificationService.error).toHaveBeenCalled();
    });

    it('should set isSubmitting to true while sending', () => {
      const formData = {
        fullName: 'John Doe',
        email: 'john@example.com',
        description: 'Test description',
      };

      component.onFormSubmit(formData as any);

      expect(component.isSubmitting()).toBeTrue();

      const req = httpMock.expectOne('/api/send-email.php');
      req.flush({ success: true, message: 'Email sent' });
    });

    it('should not submit if already submitting', fakeAsync(() => {
      const formData = {
        fullName: 'John Doe',
        email: 'john@example.com',
        description: 'Test description',
      };

      component.onFormSubmit(formData as any);
      component.onFormSubmit(formData as any); // Second call should be ignored

      // Only one request should be made
      const reqs = httpMock.match('/api/send-email.php');
      expect(reqs.length).toBe(1);

      reqs[0].flush({ success: true, message: 'Email sent' });
      tick();
    }));
  });
});
