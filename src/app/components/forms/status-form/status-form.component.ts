import { Component, OnInit } from '@angular/core';

import { FormMixin } from '../../../mixins/FormMixin';
import { ApiService } from '../../../services/api.service';
import { Status } from '../../../type';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent extends FormMixin implements OnInit {
  constructor(apiService: ApiService) {
    super(apiService);
  }

  statuses: Status[] = [];
  selectedStatus: string = '';

  ngOnInit(): void {
    this.apiService.getStatuses()
      .subscribe(data => this.statuses = data);

    this.selectedStatus = this.data.status || '';
  }

  onSave() {
    const status = this.statuses.find(({code}) => code === this.selectedStatus);

    if (!status) {
      return;
    }

    this.updateItem({
      status_name: status.name,
      status: status.code,
    });
  }
}
