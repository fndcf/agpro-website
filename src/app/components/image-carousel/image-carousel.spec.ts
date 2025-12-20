import { ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';

import { ImageCarouselComponent, CarouselImage } from './image-carousel';

describe('ImageCarouselComponent', () => {
  let component: ImageCarouselComponent;
  let fixture: ComponentFixture<ImageCarouselComponent>;

  const mockImages: CarouselImage[] = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageCarouselComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initial State', () => {
    it('should start at index 0', () => {
      expect(component.currentIndex).toBe(0);
    });

    it('should have autoplay enabled by default', () => {
      expect(component.isPlaying).toBeTrue();
    });

    it('should have default autoPlayInterval of 2000ms', () => {
      expect(component.autoPlayInterval).toBe(2000);
    });

    it('should show dots by default', () => {
      expect(component.showDots).toBeTrue();
    });

    it('should hide arrows by default', () => {
      expect(component.showArrows).toBeFalse();
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('images', mockImages);
      fixture.detectChanges();
    });

    it('should go to next image', () => {
      component.nextImage();
      expect(component.currentIndex).toBe(1);
    });

    it('should wrap around to first image after last', () => {
      component.currentIndex = 2;
      component.nextImage();
      expect(component.currentIndex).toBe(0);
    });

    it('should go to previous image', () => {
      component.currentIndex = 1;
      component.prevImage();
      expect(component.currentIndex).toBe(0);
    });

    it('should wrap around to last image from first', () => {
      component.currentIndex = 0;
      component.prevImage();
      expect(component.currentIndex).toBe(2);
    });

    it('should go to specific image', () => {
      component.goToImage(2);
      expect(component.currentIndex).toBe(2);
    });
  });

  describe('AutoPlay', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('images', mockImages);
      fixture.componentRef.setInput('autoPlayInterval', 100);
    });

    it('should auto advance after interval', fakeAsync(() => {
      component.ngOnInit();
      expect(component.currentIndex).toBe(0);

      tick(100);
      expect(component.currentIndex).toBe(1);

      tick(100);
      expect(component.currentIndex).toBe(2);

      discardPeriodicTasks();
    }));

    it('should not autoplay with single image', fakeAsync(() => {
      fixture.componentRef.setInput('images', [mockImages[0]]);
      component.ngOnInit();

      tick(200);
      expect(component.currentIndex).toBe(0);

      discardPeriodicTasks();
    }));
  });

  describe('Hover Behavior', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('images', mockImages);
      fixture.componentRef.setInput('pauseOnHover', true);
      fixture.componentRef.setInput('autoPlayInterval', 100);
    });

    it('should pause on mouse enter when pauseOnHover is true', fakeAsync(() => {
      component.ngOnInit();

      component.onMouseEnter();
      tick(200);

      expect(component.currentIndex).toBe(0);

      discardPeriodicTasks();
    }));

    it('should resume on mouse leave', fakeAsync(() => {
      component.ngOnInit();

      component.onMouseEnter();
      tick(100);
      expect(component.currentIndex).toBe(0);

      component.onMouseLeave();
      tick(100);
      expect(component.currentIndex).toBe(1);

      discardPeriodicTasks();
    }));

    it('should not pause when pauseOnHover is false', fakeAsync(() => {
      fixture.componentRef.setInput('pauseOnHover', false);
      component.ngOnInit();

      component.onMouseEnter();
      tick(100);

      expect(component.currentIndex).toBe(1);

      discardPeriodicTasks();
    }));
  });

  describe('getCurrentImage', () => {
    it('should return current image', () => {
      fixture.componentRef.setInput('images', mockImages);
      component.currentIndex = 1;

      const currentImage = component.getCurrentImage();
      expect(currentImage.src).toBe('image2.jpg');
      expect(currentImage.alt).toBe('Image 2');
    });

    it('should return fallback when no images', () => {
      fixture.componentRef.setInput('images', []);
      const currentImage = component.getCurrentImage();
      expect(currentImage.src).toBe(component.fallbackImage);
    });
  });

  describe('Image Error Handling', () => {
    it('should set fallback image on error', () => {
      const imgElement = document.createElement('img');
      const mockEvent = new Event('error');
      Object.defineProperty(mockEvent, 'target', { value: imgElement });

      component.onImageError(mockEvent);
      expect(imgElement.src).toContain(component.fallbackImage);
    });
  });

  describe('TrackBy Function', () => {
    it('should return src for trackByImage', () => {
      const image = { src: 'test.jpg', alt: 'Test' };
      expect(component.trackByImage(0, image)).toBe('test.jpg');
    });
  });
});
