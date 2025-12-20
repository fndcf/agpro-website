import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { SeoService } from './seo.service';
import { Meta } from '@angular/platform-browser';
import { getTranslocoModule } from '../testing/transloco-testing.module';

describe('SeoService', () => {
  let service: SeoService;
  let meta: Meta;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule()],
      providers: [
        provideRouter([
          { path: '', component: class {} },
          { path: 'mission', component: class {} },
          { path: 'products', component: class {} },
          { path: 'contact', component: class {} },
        ]),
      ],
    });

    service = TestBed.inject(SeoService);
    meta = TestBed.inject(Meta);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    // Clean up canonical and alternate links
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.remove();
    }
    const alternateLinks = document.querySelectorAll('link[rel="alternate"]');
    alternateLinks.forEach((link) => link.remove());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize without errors', () => {
    expect(() => service.init()).not.toThrow();
  });

  it('should have seo configs for main routes', fakeAsync(() => {
    service.init();
    router.navigate(['/']);
    tick();

    // Should have set meta description
    const description = meta.getTag('name="description"');
    expect(description).toBeTruthy();
  }));

  it('should create canonical link', fakeAsync(() => {
    service.init();
    router.navigate(['/']);
    tick();

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    expect(canonicalLink).toBeTruthy();
  }));

  it('should update Open Graph tags', fakeAsync(() => {
    service.init();
    router.navigate(['/']);
    tick();

    const ogUrl = meta.getTag('property="og:url"');
    const ogType = meta.getTag('property="og:type"');
    const ogSiteName = meta.getTag('property="og:site_name"');

    expect(ogUrl).toBeTruthy();
    expect(ogType?.content).toBe('website');
    expect(ogSiteName?.content).toBe('AgPro International');
  }));

  it('should update Twitter Card tags', fakeAsync(() => {
    service.init();
    router.navigate(['/']);
    tick();

    const twitterCard = meta.getTag('name="twitter:card"');
    expect(twitterCard?.content).toBe('summary_large_image');
  }));

  it('should create alternate language links', fakeAsync(() => {
    service.init();
    router.navigate(['/']);
    tick();

    const alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    expect(alternateLinks.length).toBeGreaterThan(0);
  }));

  it('should handle route with query params', fakeAsync(() => {
    service.init();
    router.navigate(['/products'], { queryParams: { tab: 'buildings' } });
    tick();

    const description = meta.getTag('name="description"');
    expect(description).toBeTruthy();
  }));

  it('should handle route with fragments', fakeAsync(() => {
    service.init();
    router.navigate(['/products'], { fragment: 'buildings' });
    tick();

    const description = meta.getTag('name="description"');
    expect(description).toBeTruthy();
  }));
});
