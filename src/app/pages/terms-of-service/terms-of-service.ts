import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './terms-of-service.html',
  styleUrls: ['./terms-of-service.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsOfService {}
