import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonText: string = 'Learn More';
  @Input() showButton: boolean = false;
  @Input() buttonRoute: string = '';
  @Output() readonly buttonClick = new EventEmitter<void>();

  constructor(private router: Router) {}

  onButtonClick() {
    if (this.buttonRoute) {
      this.router.navigate([this.buttonRoute]);
    } else {
      this.buttonClick.emit();
    }
  }
}