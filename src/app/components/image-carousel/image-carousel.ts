import {
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, interval, merge } from 'rxjs';
import { filter, switchMap, startWith } from 'rxjs/operators';

export interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-carousel.html',
  styleUrls: ['./image-carousel.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCarouselComponent implements OnInit {
  @Input() images: CarouselImage[] = [];
  @Input() autoPlayInterval: number = 2000;
  @Input() showDots: boolean = true;
  @Input() showArrows: boolean = false;
  @Input() pauseOnHover: boolean = true;
  @Input() fallbackImage: string = 'assets/images/colageagpro.gif';

  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);

  // Signals para estado reativo
  private readonly isPaused = signal(false);
  private readonly restartAutoPlay$ = new Subject<void>();

  currentIndex = 0;
  isPlaying = true;

  ngOnInit(): void {
    if (this.images.length > 1) {
      this.setupAutoPlay();
    }
  }

  private setupAutoPlay(): void {
    // Reinicia o intervalo quando restartAutoPlay$ emite
    this.restartAutoPlay$
      .pipe(
        startWith(undefined),
        switchMap(() => interval(this.autoPlayInterval)),
        filter(() => !this.isPaused()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.nextImage();
      });
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

  onMouseEnter(): void {
    if (this.pauseOnHover) {
      this.isPaused.set(true);
    }
  }

  onMouseLeave(): void {
    if (this.pauseOnHover) {
      this.isPaused.set(false);
    }
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = this.fallbackImage;
  }

  getCurrentImage(): CarouselImage {
    return this.images[this.currentIndex] || { src: this.fallbackImage, alt: 'Service Image' };
  }

  // TrackBy function para otimização de ngFor
  trackByImage(index: number, image: CarouselImage): string {
    return image.src;
  }
}