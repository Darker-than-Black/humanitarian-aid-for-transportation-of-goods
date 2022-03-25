import { Component } from '@angular/core';

import { FormMixin } from '../../../mixins/FormMixin';
import {Addition, FormComponent, TableColumnConfig} from '../../../type';
import { ADDITION_TABLE_CONFIG } from '../../../configs/tableConfigs';

@Component({
  selector: 'app-addition-info',
  templateUrl: './addition-info.component.html',
  styleUrls: ['./addition-info.component.css']
})
export class AdditionInfoComponent extends FormMixin implements FormComponent {
  config: TableColumnConfig[] = ADDITION_TABLE_CONFIG;

  get additions(): Addition[] {
    return this.data.addition || [];
  }
}
