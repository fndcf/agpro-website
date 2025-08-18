import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselImage, Service } from '../../models/service.model';
import { ImageCarouselComponent } from '../image-carousel/image-carousel';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, ImageCarouselComponent],
  templateUrl: './service-card.html',
  styleUrls: ['./service-card.scss']
})
export class ServiceCardComponent {
  @Input() service!: Service;
  @Input() showImage: boolean = false;
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Output() imageError = new EventEmitter<any>();
  @Input() carouselImages: CarouselImage[] = [];
  @Input() fallbackImage: string = 'assets/images/colageagpro.gif';

  onImageError(event: any) {
    this.imageError.emit(event);
  }
}
