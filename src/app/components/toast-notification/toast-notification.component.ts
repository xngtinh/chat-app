import {Component, OnInit} from '@angular/core';

import {Notification, NotificationType} from './toast-notification.model';
import {ToastNotificationService} from '../../services/toast-notification.service';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css']
})

export class ToastNotificationComponent implements OnInit{
  notifications: Notification[] = [];

  constructor(public notificationService: ToastNotificationService) {
  }

  ngOnInit(): void {
    this.notificationService.getAlert().subscribe((alert: Notification) => {
      this.notifications = [];
      if (!alert) {
        this.notifications = [];
        return;
      }
      this.notifications.push(alert);
      setTimeout(() => {
        this.notifications = this.notifications.filter(x => x !== alert);
      }, 5000);
    });
  }

  removeNotification(notification: Notification): void {
    this.notifications = this.notifications.filter(x => x !== notification);
  }

  /* Set css class for Alert -- Called from alert component */
  cssClass(notification: Notification): any {
    if (!notification) {
      return;
    }
    switch (notification.type) {
      case NotificationType.Success:
        return 'toast-success';
      case NotificationType.Error:
        return 'toast-error';
      case NotificationType.Info:
        return 'toast-info';
      case NotificationType.Warning:
        return 'toast-warning';
    }
  }
}
