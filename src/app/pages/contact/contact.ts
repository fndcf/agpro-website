// 📁 src/app/pages/contact/contact.ts (INTERNACIONALIZADO)
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from '../../components/hero/hero';
import { ContactForm } from '../../models/service.model';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroComponent],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  
  // Computed signal para traduções
  translations = computed(() => this.i18nService.currentTranslations());

  constructor(private i18nService: I18nService) {}

  contactForm: ContactForm = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    timeline: '',
    location: '',
    description: '',
    source: ''
  };

  // Timeline options agora são computed baseados nas traduções
  timelineOptions = computed(() => {
    const t = this.translations().contact.form.timelineOptions;
    return [
      { value: '', label: t.select },
      { value: 'urgent', label: t.urgent },
      { value: 'short', label: t.short },
      { value: 'medium', label: t.medium },
      { value: 'long', label: t.long }
    ];
  });

  // Source options agora são computed baseados nas traduções
  sourceOptions = computed(() => {
    const t = this.translations().contact.form.sourceOptions;
    return [
      { value: '', label: t.select },
      { value: 'google', label: t.google },
      { value: 'referral', label: t.referral },
      { value: 'trade-show', label: t.tradeShow },
      { value: 'website', label: t.website },
      { value: 'social-media', label: t.socialMedia },
      { value: 'advertisement', label: t.advertisement },
      { value: 'other', label: t.other }
    ];
  });

  // Employment qualities agora são computed baseados nas traduções
  employmentQualities = computed(() => {
    return this.translations().contact.employment.qualities;
  });

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.contactForm);
      // Here you would typically send the form data to your backend
      alert(this.translations().contact.form.successMessage);
      this.resetForm();
    } else {
      alert(this.translations().contact.form.errorMessage);
    }
  }

  private isFormValid(): boolean {
    return !!(this.contactForm.fullName && 
              this.contactForm.email && 
              this.contactForm.description);
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
      source: ''
    };
  }
}