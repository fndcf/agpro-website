import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './under-construction.html',
  styleUrls: ['./under-construction.scss']
})
export class UnderConstruction {
  
  // Computed signal para traduções
  translations = computed(() => this.i18nService.currentTranslations());

  constructor(
    private router: Router,
    private i18nService: I18nService
  ) {}

  // Navegar para home
  goHome() {
    this.router.navigate(['/']);
  }

  // Navegar para contatos
  goToContact() {
    this.router.navigate(['/contact']);
  }
}