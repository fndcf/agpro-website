import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './stats.html',
  styleUrls: ['./stats.scss'],
})
export class StatsComponent {
  stats: { number: string; labelKey: string; descriptionKey: string }[];

  constructor(private dataService: DataService) {
    this.stats = this.dataService.stats();
  }
}
