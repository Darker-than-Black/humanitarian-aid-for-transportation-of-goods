import { Component, Input, TemplateRef } from '@angular/core';
import { get } from 'lodash';

import { TableColumnConfig, TransportationItem } from '../../../type';

@Component({
  selector: 'app-goods-table-data',
  templateUrl: './goods-table-data.component.html',
  styleUrls: ['./goods-table-data.component.css']
})
export class GoodsTableDataComponent {
  @Input() path!: string;
  @Input() item!: TransportationItem;
  @Input() columnsConfig!: TableColumnConfig[];

  @Input() template?: TemplateRef<any>;

  get title(): string {
    const col = this.columnsConfig.find(({field}) => this.path === field);
    return  col ? col.header : '';
  }

  get fieldData(): string {
    return get(this.item, this.path) || '–';
  }
}
