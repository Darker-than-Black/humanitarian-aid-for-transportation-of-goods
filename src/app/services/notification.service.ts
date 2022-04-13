import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

import { NOTIFICATION_TYPES } from '../configs/notificationTypes';

const NOTIFICATION_TIMEOUT = 5000;
const MODAL_TYPES = {
  CONFIRM: 'confirm',
};

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private messageService: MessageService) {}

  add(detail: string, severity: NOTIFICATION_TYPES = NOTIFICATION_TYPES.INFO) {
    this.messageService.add({ severity, detail, life: NOTIFICATION_TIMEOUT });
  }

  addConfirmOfDeleteItem(detail: string) {
    this.messageService.add({
      detail,
      sticky: true,
      summary: 'Ви впевнені?',
      key: MODAL_TYPES.CONFIRM,
      severity: NOTIFICATION_TYPES.WARN,
    });
  }

  clearConfirmModal() {
    this.messageService.clear(MODAL_TYPES.CONFIRM);
  }
}
