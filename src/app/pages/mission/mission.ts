import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { HeroComponent } from '../../components/hero/hero';
import { StatsComponent } from '../../components/stats/stats';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule, TranslocoModule, HeroComponent, StatsComponent],
  templateUrl: './mission.html',
  styleUrls: ['./mission.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mission {}
