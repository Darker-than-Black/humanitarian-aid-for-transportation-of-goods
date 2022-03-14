import { Component, OnInit } from '@angular/core';

import { FormMixin } from '../../../mixins/FormMixin';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent extends FormMixin implements OnInit {
  constructor(apiService: ApiService) {
    super(apiService);
  }

  location: string = '';

  ngOnInit(): void {
    this.location = this.data.location || '';
  }
}
