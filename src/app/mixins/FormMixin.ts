import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ApiService } from '../services/api.service';
import { ApiTransportationItem, FormComponent, TransportationItem } from '../type';

@Component({
  template: '',
})
export class FormMixin implements FormComponent {
  constructor(protected apiService: ApiService) {}

  @Input() data!: TransportationItem;
  @Output() finally = new EventEmitter<ApiTransportationItem>();

  loading: boolean = false;

  updateItem(data: Record<string, any>): void {
    this.loading = true;

    this.apiService.updateTransportationOfItem({ ...this.data, ...data })
      .subscribe(data => {
        this.loading = false;
        this.finally.emit(data);
      });
  }
}
