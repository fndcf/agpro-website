// 📁 src/app/pages/privacy-policy/privacy-policy.ts (ATUALIZADO COM I18N)
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.scss']
})
export class PrivacyPolicy {
  // Computed signal para traduções
  translations = computed(() => this.i18nService.currentTranslations());

  constructor(private i18nService: I18nService) {}
}