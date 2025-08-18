// 📁 src/app/pages/contact/contact.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from '../../components/hero/hero';
import { ContactForm } from '../../models/service.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroComponent],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
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

  timelineOptions = [
    { value: '', label: 'Select desired timeline' },
    { value: 'urgent', label: 'Urgent (within 30 days)' },
    { value: 'short', label: 'Short-term (1-3 months)' },
    { value: 'medium', label: 'Medium-term (3-6 months)' },
    { value: 'long', label: 'Long-term (6+ months)' }
  ];

  sourceOptions = [
    { value: '', label: 'Select an option' },
    { value: 'google', label: 'Google search' },
    { value: 'referral', label: 'Client referral' },
    { value: 'trade-show', label: 'Industry trade show' },
    { value: 'website', label: 'Company website' },
    { value: 'social-media', label: 'Social media' },
    { value: 'advertisement', label: 'Advertisement' },
    { value: 'other', label: 'Other' }
  ];

  employmentQualities = [
    'Ability to work in a very demanding environment',
    'Capacity to overcome difficulties',
    'Efficiency',
    'Flexibility',
    'Desire to better yourself'
  ];

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.contactForm);
      // Here you would typically send the form data to your backend
      alert('Thank you for your inquiry! We will contact you soon.');
      this.resetForm();
    } else {
      alert('Please fill in all required fields.');
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