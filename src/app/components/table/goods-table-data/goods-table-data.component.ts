import { Component, Input, TemplateRef } from '@angular/core';
import { get } from 'lodash';

import { TableColumnConfig, TransportationItem } from '../../../type';

const DEFAULT_HANDLER = (data: any) => data;

@Component({
  selector: 'app-goods-table-data',
  templateUrl: './goods-table-data.component.html',
  styleUrls: ['./goods-table-data.component.css']
})
export class GoodsTableDataComponent {
  @Input() path!: string;
  @Input() item!: TransportationItem;
  @Input() config!: TableColumnConfig;
  @Input() template?: TemplateRef<any>;

  get fieldData(): string {
    return get(this.item, this.config.field, '');
  }

  get previewData(): string {
    const { viewHandler = DEFAULT_HANDLER } = this.config;
    const data = viewHandler(this.fieldData);
    return data || '–';
  }
}
