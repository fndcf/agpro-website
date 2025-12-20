import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

import { StatsComponent } from './stats';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Stats Data', () => {
    it('should have stats array populated', () => {
      expect(component.stats).toBeDefined();
      expect(Array.isArray(component.stats)).toBeTrue();
    });

    it('should have stats with required properties', () => {
      component.stats.forEach((stat) => {
        expect(stat.number).toBeDefined();
        expect(stat.labelKey).toBeDefined();
        expect(stat.descriptionKey).toBeDefined();
      });
    });
  });

  describe('TrackBy Function', () => {
    it('should return labelKey for trackByStat', () => {
      const stat = { labelKey: 'test.label', number: '10', descriptionKey: 'test.desc' };
      expect(component.trackByStat(0, stat)).toBe('test.label');
    });
  });
});
