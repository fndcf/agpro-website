// 📁 src/app/components/service-card/service-card.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrls: ['./service-card.scss']
})
export class ServiceCardComponent {
  @Input() service!: Service;
  @Input() showImage: boolean = false;
  @Input() imageUrl: string = '';
}