import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { HeroComponent } from './hero';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Input Properties', () => {
    it('should have empty title by default', () => {
      expect(component.title).toBe('');
    });

    it('should have empty subtitle by default', () => {
      expect(component.subtitle).toBe('');
    });

    it('should have default button text', () => {
      expect(component.buttonText).toBe('Learn More');
    });

    it('should not show button by default', () => {
      expect(component.showButton).toBeFalse();
    });
  });

  describe('Button Click', () => {
    it('should navigate to route when buttonRoute is set', () => {
      spyOn(router, 'navigate');
      fixture.componentRef.setInput('buttonRoute', '/products');
      fixture.detectChanges();
      component.onButtonClick();
      expect(router.navigate).toHaveBeenCalledWith(['/products']);
    });

    it('should emit buttonClick when no route is set', () => {
      spyOn(component.buttonClick, 'emit');
      fixture.componentRef.setInput('buttonRoute', '');
      fixture.detectChanges();
      component.onButtonClick();
      expect(component.buttonClick.emit).toHaveBeenCalled();
    });
  });
});
