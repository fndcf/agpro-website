import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-of-service.html',
  styleUrls: ['./terms-of-service.scss']
})
export class TermsOfService {
  lastUpdated = 'January 2025';
}
