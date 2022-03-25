import { get } from 'lodash';
import { Component } from '@angular/core';

import { FormComponent, ViewListItem } from '../../../type';
import { FormMixin } from '../../../mixins/FormMixin';
import { RECIPIENT_VIEW_LIST_CONFIG } from '../../../configs/viewListConfigs';

@Component({
  selector: 'app-recipient-info',
  templateUrl: './recipient-info.component.html',
  styleUrls: ['./recipient-info.component.css']
})
export class RecipientInfoComponent extends FormMixin implements FormComponent {
  listConfig: ViewListItem[] = RECIPIENT_VIEW_LIST_CONFIG;

  fieldData(key: string): string {
    return get(this.data, key) || '–';
  }
}
