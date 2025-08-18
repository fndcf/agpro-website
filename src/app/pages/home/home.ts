// 📁 src/app/pages/home/home.ts
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero';
import { StatsComponent } from '../../components/stats/stats';
import { HomeCardComponent } from '../../components/home-card/home-card';
import { DataService } from '../../services/data.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, StatsComponent, HomeCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  // Computed signals para dados e traduções
  services = computed(() => this.dataService.homeServices());
  translations = computed(() => this.i18nService.currentTranslations());

  constructor(
    private dataService: DataService,
    private i18nService: I18nService,
    private router: Router
  ) {}

  navigateToProducts() {
    this.router.navigate(['/products']);
  }
}