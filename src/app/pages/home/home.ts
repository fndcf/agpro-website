import { Component, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { HeroComponent } from '../../components/hero/hero';
import { StatsComponent } from '../../components/stats/stats';
import { HomeCardComponent } from '../../components/home-card/home-card';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    HeroComponent,
    StatsComponent,
    HomeCardComponent,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  services = computed(() => this.dataService.homeServices());

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  navigateToProducts() {
    this.router.navigate(['/products']);
  }

  // TrackBy function para otimização de ngFor
  trackByService(index: number, service: { id: string }): string {
    return service.id;
  }
}
