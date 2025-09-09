import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-of-service.html',
  styleUrls: ['./terms-of-service.scss']
})
export class TermsOfService {
  // Computed signal para traduções
  translations = computed(() => this.i18nService.currentTranslations());

  constructor(private i18nService: I18nService) {}
}