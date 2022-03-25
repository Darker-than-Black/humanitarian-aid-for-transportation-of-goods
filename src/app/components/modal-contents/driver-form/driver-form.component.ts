import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Driver, FormComponent } from '../../../type';
import { ApiService } from '../../../services/api.service';
import { getPreviewDriver } from '../../../utils';
import { FormMixin } from '../../../mixins/FormMixin';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent extends FormMixin implements FormComponent, OnInit {
  constructor(apiService: ApiService, private fb: FormBuilder) {
    super(apiService);
  }

  // change driver
  drivers: Array<Driver & {label: string}> = [];
  selectedDriver!: Driver;

  // create new driver
  form = this.fb.group({
    name: ['', Validators.required],
    contact_phone: ['', Validators.required],
    comment: [''],
  });

  ngOnInit() {
    this.apiService.getDrivers()
      .subscribe((data) => this.drivers = data.map(el => ({
        ...el,
        label: getPreviewDriver(el),
      })));
  }

  addDriver() {
    this.loading = true;
    this.apiService.addDriver(this.form.value)
      .subscribe(driver => this.updateItem({driver}));
  }
}
