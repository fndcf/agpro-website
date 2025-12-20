import { Injectable, signal, computed } from '@angular/core';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
  duration: number;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private nextId = 0;
  private readonly notificationsSignal = signal<Notification[]>([]);

  readonly notifications = computed(() => this.notificationsSignal());

  success(message: string, duration = 4000): void {
    this.show(message, 'success', duration);
  }

  error(message: string, duration = 6000): void {
    this.show(message, 'error', duration);
  }

  warning(message: string, duration = 5000): void {
    this.show(message, 'warning', duration);
  }

  info(message: string, duration = 4000): void {
    this.show(message, 'info', duration);
  }

  private show(message: string, type: NotificationType, duration: number): void {
    const id = this.nextId++;
    const notification: Notification = { id, message, type, duration };

    this.notificationsSignal.update((notifications) => [...notifications, notification]);

    if (duration > 0) {
      setTimeout(() => this.remove(id), duration);
    }
  }

  remove(id: number): void {
    this.notificationsSignal.update((notifications) =>
      notifications.filter((n) => n.id !== id)
    );
  }
}
