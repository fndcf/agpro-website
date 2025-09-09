import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './mission.html',
  styleUrls: ['./mission.scss']
})
export class Mission {
  // Computed signal para traduções
  translations = computed(() => this.i18nService.currentTranslations());

  constructor(private i18nService: I18nService) {}
}