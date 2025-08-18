import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './under-construction.html',
  styleUrls: ['./under-construction.scss']
})
export class UnderConstruction {
  
  constructor(private router: Router) {}

  // Navegar para home
  goHome() {
    this.router.navigate(['/']);
  }

  // Navegar para contatos
  goToContact() {
    this.router.navigate(['/contact']);
  }
}