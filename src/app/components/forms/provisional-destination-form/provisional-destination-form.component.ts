import { Component, OnInit } from '@angular/core';

import { FormMixin } from "../../../mixins/FormMixin";
import { ApiService } from "../../../services/api.service";

@Component({
  selector: 'app-provisional-destination-form',
  templateUrl: './provisional-destination-form.component.html',
  styleUrls: ['./provisional-destination-form.component.css']
})
export class ProvisionalDestinationFormComponent extends FormMixin implements OnInit {
  constructor(apiService: ApiService) {
    super(apiService);
  }

  provisional_destination: string = '';

  ngOnInit(): void {
    this.provisional_destination = this.data.provisional_destination || '';
  }
}
