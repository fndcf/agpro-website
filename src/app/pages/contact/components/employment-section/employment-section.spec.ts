import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '../../../../testing/transloco-testing.module';

import { EmploymentSectionComponent } from './employment-section';

describe('EmploymentSectionComponent', () => {
  let component: EmploymentSectionComponent;
  let fixture: ComponentFixture<EmploymentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentSectionComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(EmploymentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have qualities signal', () => {
    expect(component.qualities).toBeTruthy();
  });

  it('should track qualities by value', () => {
    expect(component.trackByQuality(0, 'Quality 1')).toBe('Quality 1');
    expect(component.trackByQuality(1, 'Quality 2')).toBe('Quality 2');
  });
});
