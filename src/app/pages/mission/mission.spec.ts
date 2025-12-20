import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

import { Mission } from './mission';

describe('Mission', () => {
  let component: Mission;
  let fixture: ComponentFixture<Mission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mission, getTranslocoModule()],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Mission);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
