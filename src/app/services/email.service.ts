import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ContactForm } from '../models/service.model';

export interface EmailResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/send-email.php';

  sendContactEmail(formData: ContactForm): Observable<EmailResponse> {
    return this.http.post<EmailResponse>(this.apiUrl, formData).pipe(
      map((response) => {
        if (!response.success) {
          throw new Error(response.message || 'Failed to send email');
        }
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred while sending the email.';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else if (error.status === 0) {
      // Network error
      errorMessage = 'Unable to connect to the server. Please check your internet connection.';
    } else if (error.status === 429) {
      // Rate limiting
      errorMessage = 'Too many requests. Please wait a moment and try again.';
    } else if (error.status >= 500) {
      // Server error
      errorMessage = 'Server error. Please try again later.';
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    }

    return throwError(() => new Error(errorMessage));
  }
}
