import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { HeroComponent } from '../../components/hero/hero';
import { ContactForm } from '../../models/service.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule, HeroComponent],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  private translocoService = inject(TranslocoService);

  contactForm: ContactForm = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    timeline: '',
    location: '',
    description: '',
    source: '',
  };

  // Timeline options - chaves de tradução
  timelineOptions = [
    { value: '', labelKey: 'contact.form.timelineOptions.select' },
    { value: 'urgent', labelKey: 'contact.form.timelineOptions.urgent' },
    { value: 'short', labelKey: 'contact.form.timelineOptions.short' },
    { value: 'medium', labelKey: 'contact.form.timelineOptions.medium' },
    { value: 'long', labelKey: 'contact.form.timelineOptions.long' },
  ];

  // Source options - chaves de tradução
  sourceOptions = [
    { value: '', labelKey: 'contact.form.sourceOptions.select' },
    { value: 'google', labelKey: 'contact.form.sourceOptions.google' },
    { value: 'referral', labelKey: 'contact.form.sourceOptions.referral' },
    { value: 'trade-show', labelKey: 'contact.form.sourceOptions.tradeShow' },
    { value: 'website', labelKey: 'contact.form.sourceOptions.website' },
    { value: 'social-media', labelKey: 'contact.form.sourceOptions.socialMedia' },
    { value: 'advertisement', labelKey: 'contact.form.sourceOptions.advertisement' },
    { value: 'other', labelKey: 'contact.form.sourceOptions.other' },
  ];

  // Employment qualities - obtém do Transloco como array
  getQualities(): string[] {
    const qualities = this.translocoService.translate('contact.employment.qualities');
    return Array.isArray(qualities) ? qualities : [];
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.contactForm);
      alert(this.translocoService.translate('contact.form.successMessage'));
      this.resetForm();
    } else {
      alert(this.translocoService.translate('contact.form.errorMessage'));
    }
  }

  private isFormValid(): boolean {
    return !!(this.contactForm.fullName && this.contactForm.email && this.contactForm.description);
  }

  private resetForm() {
    this.contactForm = {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      timeline: '',
      location: '',
      description: '',
      source: '',
    };
  }
}
