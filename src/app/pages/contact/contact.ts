import { Component, inject, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { HeroComponent } from '../../components/hero/hero';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { EmploymentSectionComponent } from './components/employment-section/employment-section';
import { NotificationService } from '../../services/notification.service';
import { EmailService } from '../../services/email.service';
import { ContactForm } from '../../models/service.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    HeroComponent,
    ContactFormComponent,
    EmploymentSectionComponent,
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly translocoService = inject(TranslocoService);
  private readonly notificationService = inject(NotificationService);
  private readonly emailService = inject(EmailService);

  private readonly contactForm = viewChild(ContactFormComponent);

  readonly isSubmitting = signal(false);

  onFormSubmit(formData: ContactForm): void {
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);

    this.emailService.sendContactEmail(formData).subscribe({
      next: () => {
        this.notificationService.success(
          this.translocoService.translate('contact.form.successMessage')
        );
        this.contactForm()?.resetForm();
        this.isSubmitting.set(false);
      },
      error: (error: Error) => {
        console.error('Email send error:', error);
        this.notificationService.error(
          this.translocoService.translate('contact.form.sendErrorMessage') ||
            error.message ||
            this.translocoService.translate('contact.form.errorMessage')
        );
        this.isSubmitting.set(false);
      },
    });
  }

  onFormError(): void {
    this.notificationService.error(
      this.translocoService.translate('contact.form.errorMessage')
    );
  }
}
