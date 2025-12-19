import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './under-construction.html',
  styleUrls: ['./under-construction.scss'],
})
export class UnderConstruction {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
