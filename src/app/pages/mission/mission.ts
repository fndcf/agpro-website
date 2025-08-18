// 📁 src/app/pages/mission/mission.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './mission.html',
  styleUrls: ['./mission.scss']
})
export class Mission {}