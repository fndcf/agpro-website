import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

import { UnderConstruction } from './under-construction';

describe('UnderConstruction', () => {
  let component: UnderConstruction;
  let fixture: ComponentFixture<UnderConstruction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderConstruction, getTranslocoModule()],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UnderConstruction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
