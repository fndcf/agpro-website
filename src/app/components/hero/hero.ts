// 📁 src/app/components/hero/hero.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonText: string = 'Learn More';
  @Input() showButton: boolean = false;
}