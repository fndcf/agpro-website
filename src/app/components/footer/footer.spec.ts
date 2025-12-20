import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, getTranslocoModule()],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Current Year', () => {
    it('should have current year set', () => {
      const currentYear = new Date().getFullYear();
      expect(component.currentYear).toBe(currentYear);
    });
  });

  describe('Product Links', () => {
    it('should have 4 product links', () => {
      expect(component.productLinks.length).toBe(4);
    });

    it('should have correct fragments for product links', () => {
      const fragments = component.productLinks.map((link) => link.fragment);
      expect(fragments).toContain('buildings');
      expect(fragments).toContain('equipments');
      expect(fragments).toContain('grain-storage');
      expect(fragments).toContain('feed-transport');
    });

    it('should all point to /products route', () => {
      component.productLinks.forEach((link) => {
        expect(link.route).toBe('/products');
      });
    });
  });

  describe('Company Links', () => {
    it('should have 3 company links', () => {
      expect(component.companyLinks.length).toBe(3);
    });

    it('should have correct routes for company links', () => {
      const routes = component.companyLinks.map((link) => link.route);
      expect(routes).toContain('/mission');
      expect(routes).toContain('/projects');
      expect(routes).toContain('/contact');
    });
  });

  describe('Social Links', () => {
    it('should have 2 social links', () => {
      expect(component.socialLinks.length).toBe(2);
    });

    it('should have valid URLs for social links', () => {
      component.socialLinks.forEach((link) => {
        expect(link.url).toMatch(/^https:\/\//);
      });
    });
  });

  describe('Scroll to Top', () => {
    it('should call window.scrollTo when scrollToTop is called', () => {
      spyOn(window, 'scrollTo');
      component.scrollToTop();
      expect(window.scrollTo).toHaveBeenCalled();
    });
  });

  describe('TrackBy Functions', () => {
    it('should return fragment for trackByProductLink', () => {
      const link = { fragment: 'buildings' };
      expect(component.trackByProductLink(0, link)).toBe('buildings');
    });

    it('should return route for trackByCompanyLink', () => {
      const link = { route: '/mission' };
      expect(component.trackByCompanyLink(0, link)).toBe('/mission');
    });

    it('should return url for trackBySocialLink', () => {
      const social = { url: 'https://facebook.com' };
      expect(component.trackBySocialLink(0, social)).toBe('https://facebook.com');
    });
  });
});
