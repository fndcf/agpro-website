import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

import { HeaderComponent } from './header';
import { I18nService, Language } from '../../services/i18n.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let i18nService: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, getTranslocoModule()],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    i18nService = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Menu Toggle', () => {
    it('should start with menu closed', () => {
      expect(component.isMenuOpen).toBeFalse();
    });

    it('should toggle menu state when toggleMenu is called', () => {
      component.toggleMenu();
      expect(component.isMenuOpen).toBeTrue();

      component.toggleMenu();
      expect(component.isMenuOpen).toBeFalse();
    });
  });

  describe('Navigation Items', () => {
    it('should have 5 navigation items', () => {
      expect(component.navItems.length).toBe(5);
    });

    it('should have correct routes for navigation items', () => {
      const routes = component.navItems.map((item) => item.route);
      expect(routes).toContain('/');
      expect(routes).toContain('/mission');
      expect(routes).toContain('/products');
      expect(routes).toContain('/projects');
      expect(routes).toContain('/contact');
    });
  });

  describe('Language Selector', () => {
    it('should have 3 language options', () => {
      expect(component.languages.length).toBe(3);
    });

    it('should have correct language codes', () => {
      const codes = component.languages.map((lang) => lang.code);
      expect(codes).toContain('en');
      expect(codes).toContain('pt');
      expect(codes).toContain('es');
    });

    it('should call i18nService when changing language', () => {
      spyOn(i18nService, 'setLanguage');
      component.changeLanguage('pt');
      expect(i18nService.setLanguage).toHaveBeenCalledWith('pt');
    });
  });

  describe('Social Links', () => {
    it('should have 2 social links', () => {
      expect(component.socialLinks.length).toBe(2);
    });

    it('should have Facebook and Instagram links', () => {
      const titles = component.socialLinks.map((link) => link.title);
      expect(titles).toContain('Facebook');
      expect(titles).toContain('Instagram');
    });
  });

  describe('TrackBy Functions', () => {
    it('should return url for trackBySocialLink', () => {
      const social = { url: 'https://facebook.com' };
      expect(component.trackBySocialLink(0, social)).toBe('https://facebook.com');
    });

    it('should return code for trackByLanguage', () => {
      const lang = { code: 'en' as Language };
      expect(component.trackByLanguage(0, lang)).toBe('en');
    });

    it('should return route for trackByNavItem', () => {
      const item = { route: '/products' };
      expect(component.trackByNavItem(0, item)).toBe('/products');
    });
  });
});
