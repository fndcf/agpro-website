import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

import { HomeCardComponent } from './home-card';

describe('HomeCardComponent', () => {
  let component: HomeCardComponent;
  let fixture: ComponentFixture<HomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCardComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Input Properties', () => {
    it('should accept homeservice input', () => {
      const mockService = {
        id: 'test-service',
        titleKey: 'test.title',
        descriptionKey: 'test.description',
      };

      fixture.componentRef.setInput('homeservice', mockService);
      fixture.detectChanges();

      expect(component.homeservice.id).toBe('test-service');
      expect(component.homeservice.titleKey).toBe('test.title');
      expect(component.homeservice.descriptionKey).toBe('test.description');
    });
  });
});
