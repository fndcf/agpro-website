import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

import { Sitemap } from './sitemap';

describe('Sitemap', () => {
  let component: Sitemap;
  let fixture: ComponentFixture<Sitemap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sitemap, getTranslocoModule()],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Sitemap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
