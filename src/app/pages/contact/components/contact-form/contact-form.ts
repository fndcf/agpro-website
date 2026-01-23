import {
  Component,
  inject,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ContactForm } from '../../../../models/service.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly translocoService = inject(TranslocoService);

  @Input() isSubmitting = false;
  @Output() readonly formSubmit = new EventEmitter<ContactForm>();
  @Output() readonly formError = new EventEmitter<void>();

  contactForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    timeline: [''],
    location: [''],
    description: ['', [Validators.required, Validators.minLength(5)]],
    source: [''],
  });

  readonly timelineOptions = [
    { value: '', labelKey: 'contact.form.timelineOptions.select' },
    { value: 'urgent', labelKey: 'contact.form.timelineOptions.urgent' },
    { value: 'short', labelKey: 'contact.form.timelineOptions.short' },
    { value: 'medium', labelKey: 'contact.form.timelineOptions.medium' },
    { value: 'long', labelKey: 'contact.form.timelineOptions.long' },
  ];

  readonly sourceOptions = [
    { value: '', labelKey: 'contact.form.sourceOptions.select' },
    { value: 'google', labelKey: 'contact.form.sourceOptions.google' },
    { value: 'referral', labelKey: 'contact.form.sourceOptions.referral' },
    { value: 'trade-show', labelKey: 'contact.form.sourceOptions.tradeShow' },
    { value: 'website', labelKey: 'contact.form.sourceOptions.website' },
    { value: 'social-media', labelKey: 'contact.form.sourceOptions.socialMedia' },
    { value: 'advertisement', labelKey: 'contact.form.sourceOptions.advertisement' },
    { value: 'other', labelKey: 'contact.form.sourceOptions.other' },
  ];

  get f() {
    return this.contactForm.controls;
  }

  hasError(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.errors) return '';

    if (field.errors['required']) {
      return this.translocoService.translate('contact.form.validation.required');
    }
    if (field.errors['email']) {
      return this.translocoService.translate('contact.form.validation.invalidEmail');
    }
    if (field.errors['minlength']) {
      const minLength = field.errors['minlength'].requiredLength;
      return this.translocoService.translate('contact.form.validation.minLength', {
        min: minLength,
      });
    }
    return '';
  }

  onSubmit(): void {
    if (this.isSubmitting) return;

    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.formSubmit.emit(this.contactForm.value as ContactForm);
    } else {
      this.formError.emit();
    }
  }

  resetForm(): void {
    this.contactForm.reset();
  }

  trackByTimelineOption(_index: number, option: { value: string }): string {
    return option.value;
  }

  trackBySourceOption(_index: number, option: { value: string }): string {
    return option.value;
  }
}
