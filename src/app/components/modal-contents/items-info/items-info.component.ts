import { Component } from '@angular/core';

import { FormMixin } from '../../../mixins/FormMixin';
import { FormComponent, TableColumnConfig } from '../../../type';
import { ITEMS_TABLE_CONFIG } from '../../../configs/tableConfigs';

@Component({
  selector: 'app-items-info',
  templateUrl: './items-info.component.html',
  styleUrls: ['./items-info.component.css']
})
export class ItemsInfoComponent extends FormMixin implements FormComponent {
  config: TableColumnConfig[] = ITEMS_TABLE_CONFIG;
}
