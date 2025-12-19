import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './home-card.html',
  styleUrls: ['./home-card.scss'],
})
export class HomeCardComponent {
  @Input() homeservice!: {
    id: string;
    titleKey: string;
    descriptionKey: string;
  };
}
