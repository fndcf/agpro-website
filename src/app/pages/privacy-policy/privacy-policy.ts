import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicy {}
