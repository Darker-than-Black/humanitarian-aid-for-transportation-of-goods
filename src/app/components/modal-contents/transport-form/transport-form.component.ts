import { PATTERN_TYPES } from 'med-dynamic-form';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormComponent, Transport } from '../../../type';
import { ApiService } from '../../../services/api.service';
import { getPreviewTransport } from '../../../utils';
import {FormMixin} from "../../../mixins/FormMixin";

const TRANSPORT_TYPES = ['Авто', 'Поїзд', 'Літак'];

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.css']
})
export class TransportFormComponent extends FormMixin implements FormComponent, OnInit {
  constructor(apiService: ApiService, private fb: FormBuilder) {
    super(apiService);
  }

  namePattern = PATTERN_TYPES.LATIN_AND_NUMBER;

  // change transport
  transports: Array<Transport & {label: string}> = [];
  selectedTransport!: Transport;

  // create new transport
  transportTypes: string[] = TRANSPORT_TYPES;
  form = this.fb.group({
    type: ['', Validators.required],
    name: ['', Validators.required],
    capacity: [''],
    volume: [''],
    temperature: [false],
    regular: [false],
    comment: [''],
  });

  ngOnInit() {
    this.apiService.getTransports()
      .subscribe((data) => this.transports = data.map(el => ({
        ...el,
        label: getPreviewTransport(el),
      })));
  }

  addTransport() {
    this.loading = true;
    this.apiService.addTransport(this.form.value)
      .subscribe(transport => this.updateItem({transport}));
  }
}
