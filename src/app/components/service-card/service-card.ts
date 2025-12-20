import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselImage, Service } from '../../models/service.model';
import { ImageCarouselComponent } from '../image-carousel/image-carousel';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, ImageCarouselComponent],
  templateUrl: './service-card.html',
  styleUrls: ['./service-card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: Service;
  @Input() showImage: boolean = false;
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() carouselImages: CarouselImage[] = [];
  @Input() fallbackImage: string = 'assets/images/colageagpro.gif';
  @Output() readonly imageError = new EventEmitter<Event>();

  onImageError(event: Event): void {
    this.imageError.emit(event);
  }
}
