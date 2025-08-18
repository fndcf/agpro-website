// 📁 src/app/pages/home/home.ts
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';
import { StatsComponent } from '../../components/stats/stats';
import { ServiceCardComponent } from '../../components/service-card/service-card';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, StatsComponent, ServiceCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  services = computed(() => this.dataService.homeServices());

  constructor(private dataService: DataService) {}
}