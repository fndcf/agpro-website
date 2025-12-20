import { ErrorHandler, Injectable, inject, NgZone } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly notificationService = inject(NotificationService);
  private readonly zone = inject(NgZone);

  handleError(error: unknown): void {
    // Log error to console for debugging
    console.error('Global error caught:', error);

    // Run notification inside Angular zone to trigger change detection
    this.zone.run(() => {
      const message = this.extractErrorMessage(error);
      this.notificationService.error(message);
    });
  }

  private extractErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.name === 'HttpErrorResponse') {
        return 'Erro de conexão. Verifique sua internet.';
      }
      if (error.name === 'ChunkLoadError') {
        return 'Erro ao carregar a página. Tente recarregar.';
      }
      // Return generic message for other errors (don't expose internals)
      return 'Ocorreu um erro inesperado.';
    }

    if (typeof error === 'string') {
      return error;
    }

    return 'Ocorreu um erro inesperado.';
  }
}
