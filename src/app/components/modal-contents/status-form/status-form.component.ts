import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormMixin } from '../../../mixins/FormMixin';
import { FormComponent, Status } from '../../../type';
import { ApiService } from '../../../services/api.service';

const ADDITION_STATUS = 'addition';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent extends FormMixin implements OnInit, FormComponent {
  constructor(apiService: ApiService, private fb: FormBuilder) {
    super(apiService);
  }

  statuses: Status[] = [];
  selectedStatus: string = '';

  additionalForm = this.fb.group({
    status_new_date: ['', Validators.required],
    status_comment: [''],
  });

  get isAdditionStatus(): boolean {
    return this.selectedStatus === ADDITION_STATUS;
  }

  get invalidAdditionalStatus(): boolean {
    return this.isAdditionStatus && this.additionalForm.invalid;
  }

  get disableBtn(): boolean {
    return !this.selectedStatus || this.invalidAdditionalStatus || this.loading;
  }

  ngOnInit(): void {
    this.apiService.getStatuses()
      .subscribe(data => this.statuses = data);

    this.selectedStatus = this.data.status || '';
  }

  onSave() {
    const status = this.statuses.find(({code}) => code === this.selectedStatus);

    if (!status || this.isAdditionStatus && this.invalidAdditionalStatus) {
      return;
    }

    this.updateItem({
      ...this.additionalForm.value,
      status_name: status.name,
      status: status.code,
    });
  }
}
