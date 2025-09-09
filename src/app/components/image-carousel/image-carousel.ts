import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-carousel.html',
  styleUrls: ['./image-carousel.scss']
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  @Input() images: CarouselImage[] = [];
  @Input() autoPlayInterval: number = 2000; // 2 segundos
  @Input() showDots: boolean = true;
  @Input() showArrows: boolean = false;
  @Input() pauseOnHover: boolean = true;
  @Input() fallbackImage: string = 'assets/images/colageagpro.gif';

  currentIndex = 0;
  isPlaying = true;
  private intervalId: any;
  private isHovered = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.images.length > 1) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    if (this.images.length <= 1) return;
    
    this.stopAutoPlay();
    this.intervalId = setInterval(() => {
      if (this.isPlaying && !this.isHovered) {
        this.nextImage();
      }
    }, this.autoPlayInterval);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.cdr.detectChanges();
  }

  prevImage() {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    this.cdr.detectChanges();
  }

  goToImage(index: number) {
    this.currentIndex = index;
    this.cdr.detectChanges();
  }

  onMouseEnter() {
    if (this.pauseOnHover) {
      this.isHovered = true;
    }
  }

  onMouseLeave() {
    if (this.pauseOnHover) {
      this.isHovered = false;
    }
  }

  onImageError(event: any) {
    event.target.src = this.fallbackImage;
  }

  getCurrentImage(): CarouselImage {
    return this.images[this.currentIndex] || { src: this.fallbackImage, alt: 'Service Image' };
  }
}