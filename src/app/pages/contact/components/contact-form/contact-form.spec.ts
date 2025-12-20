import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { getTranslocoModule } from '../../../../testing/transloco-testing.module';

import { ContactFormComponent } from './contact-form';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent, ReactiveFormsModule, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Initialization', () => {
    it('should create contact form with all required fields', () => {
      expect(component.contactForm).toBeTruthy();
      expect(component.contactForm.get('fullName')).toBeTruthy();
      expect(component.contactForm.get('company')).toBeTruthy();
      expect(component.contactForm.get('email')).toBeTruthy();
      expect(component.contactForm.get('phone')).toBeTruthy();
      expect(component.contactForm.get('timeline')).toBeTruthy();
      expect(component.contactForm.get('location')).toBeTruthy();
      expect(component.contactForm.get('description')).toBeTruthy();
      expect(component.contactForm.get('source')).toBeTruthy();
    });

    it('should start with invalid form', () => {
      expect(component.contactForm.valid).toBeFalse();
    });
  });

  describe('Form Validation', () => {
    it('should require fullName with minimum 2 characters', () => {
      const fullName = component.contactForm.get('fullName');
      fullName?.setValue('');
      expect(fullName?.hasError('required')).toBeTrue();

      fullName?.setValue('A');
      expect(fullName?.hasError('minlength')).toBeTrue();

      fullName?.setValue('John Doe');
      expect(fullName?.valid).toBeTrue();
    });

    it('should require valid email', () => {
      const email = component.contactForm.get('email');
      email?.setValue('');
      expect(email?.hasError('required')).toBeTrue();

      email?.setValue('invalid-email');
      expect(email?.hasError('email')).toBeTrue();

      email?.setValue('valid@email.com');
      expect(email?.valid).toBeTrue();
    });

    it('should require description with minimum 10 characters', () => {
      const description = component.contactForm.get('description');
      description?.setValue('');
      expect(description?.hasError('required')).toBeTrue();

      description?.setValue('Short');
      expect(description?.hasError('minlength')).toBeTrue();

      description?.setValue('This is a valid description');
      expect(description?.valid).toBeTrue();
    });
  });

  describe('hasError Method', () => {
    it('should return false for untouched fields', () => {
      expect(component.hasError('fullName')).toBeFalse();
    });

    it('should return true for touched invalid fields', () => {
      const fullName = component.contactForm.get('fullName');
      fullName?.setValue('');
      fullName?.markAsTouched();
      expect(component.hasError('fullName')).toBeTrue();
    });
  });

  describe('Form Options', () => {
    it('should have 5 timeline options', () => {
      expect(component.timelineOptions.length).toBe(5);
    });

    it('should have 8 source options', () => {
      expect(component.sourceOptions.length).toBe(8);
    });
  });

  describe('Form Submission', () => {
    it('should emit formError for invalid form', () => {
      spyOn(component.formError, 'emit');
      component.onSubmit();
      expect(component.formError.emit).toHaveBeenCalled();
    });

    it('should emit formSubmit for valid form', () => {
      spyOn(component.formSubmit, 'emit');

      component.contactForm.patchValue({
        fullName: 'John Doe',
        email: 'john@example.com',
        description: 'This is a valid description for testing',
      });

      component.onSubmit();
      expect(component.formSubmit.emit).toHaveBeenCalled();
    });
  });

  describe('TrackBy Functions', () => {
    it('should return value for trackByTimelineOption', () => {
      const option = { value: 'urgent', labelKey: '' };
      expect(component.trackByTimelineOption(0, option)).toBe('urgent');
    });

    it('should return value for trackBySourceOption', () => {
      const option = { value: 'google', labelKey: '' };
      expect(component.trackBySourceOption(0, option)).toBe('google');
    });
  });
});
