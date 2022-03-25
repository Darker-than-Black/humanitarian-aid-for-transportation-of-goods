import { get } from 'lodash';
import { Component } from '@angular/core';

import { FormComponent, ViewListItem } from '../../../type';
import { FormMixin } from '../../../mixins/FormMixin';
import { SENDER_VIEW_LIST_CONFIG } from '../../../configs/viewListConfigs';

@Component({
  selector: 'app-sender-info',
  templateUrl: './sender-info.component.html',
  styleUrls: ['./sender-info.component.css']
})
export class SenderInfoComponent extends FormMixin implements FormComponent {
  listConfig: ViewListItem[] = SENDER_VIEW_LIST_CONFIG;

  fieldData(key: string): string {
    return get(this.data, key) || '–';
  }
}
