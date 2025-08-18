// 📁 src/app/components/stats/stats.ts
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.html',
  styleUrls: ['./stats.scss']
})
export class StatsComponent {
  stats = computed(() => this.dataService.stats());

  constructor(private dataService: DataService) {}
}