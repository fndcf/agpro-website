import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './home-card.html',
  styleUrls: ['./home-card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCardComponent {
  @Input({ required: true }) homeservice!: {
    readonly id: string;
    readonly titleKey: string;
    readonly descriptionKey: string;
  };
}
