import {
  Component,
  Input,
  ChangeDetectionStrategy,
  signal,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-employment-section',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './employment-section.html',
  styleUrls: ['./employment-section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmploymentSectionComponent implements OnInit {
  private readonly translocoService = inject(TranslocoService);

  readonly qualities = signal<string[]>([]);

  ngOnInit(): void {
    this.translocoService
      .selectTranslate('contact.employment.qualities')
      .subscribe((q) => {
        if (Array.isArray(q)) {
          this.qualities.set(q);
        }
      });
  }

  trackByQuality(_index: number, quality: string): string {
    return quality;
  }
}
