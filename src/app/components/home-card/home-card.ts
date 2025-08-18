import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../models/home.model';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-card.html',
  styleUrls: ['./home-card.scss']
})
export class HomeCardComponent {
  @Input() homeservice!: HomeService;
}