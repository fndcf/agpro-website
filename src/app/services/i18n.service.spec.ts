import { TestBed } from '@angular/core/testing';
import { I18nService, Language } from './i18n.service';
import { getTranslocoModule } from '../testing/transloco-testing.module';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();

    TestBed.configureTestingModule({
      imports: [getTranslocoModule()],
    });
    service = TestBed.inject(I18nService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default language as en', () => {
    expect(service.currentLanguage()).toBe('en');
  });

  it('should set language to pt', () => {
    service.setLanguage('pt');
    expect(service.currentLanguage()).toBe('pt');
  });

  it('should set language to es', () => {
    service.setLanguage('es');
    expect(service.currentLanguage()).toBe('es');
  });

  it('should persist language to localStorage', () => {
    service.setLanguage('pt');
    expect(localStorage.getItem('agpro-language')).toBe('pt');
  });

  it('should initialize language from localStorage', () => {
    localStorage.setItem('agpro-language', 'es');
    service.initializeLanguage();
    expect(service.currentLanguage()).toBe('es');
  });

  it('should not change language if localStorage has invalid value', () => {
    localStorage.setItem('agpro-language', 'invalid');
    service.initializeLanguage();
    expect(service.currentLanguage()).toBe('en');
  });

  it('should translate keys', () => {
    const translation = service.translate('header.home');
    expect(translation).toBe('Home');
  });

  it('should update translations when language changes', () => {
    service.setLanguage('en');
    expect(service.translate('header.home')).toBe('Home');
  });
});
