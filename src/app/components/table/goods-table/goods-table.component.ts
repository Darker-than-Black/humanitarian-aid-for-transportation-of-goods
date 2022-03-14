import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MODAL_TYPES } from '../../../configs/modalTypes';
import { GOODS_TABLE_CONFIG } from '../../../configs/goodsTableConfig';
import { OpenModalEvent, TableColumnConfig, TransportationItem } from '../../../type';

@Component({
  selector: 'app-goods-table',
  templateUrl: './goods-table.component.html',
  styleUrls: ['./goods-table.component.css']
})
export class GoodsTableComponent {
  @Input() data: TransportationItem[] = [];
  @Input() loading: boolean = false;
  @Output() openModal = new EventEmitter<OpenModalEvent>();

  columns: TableColumnConfig[] = GOODS_TABLE_CONFIG;
  modalTypes = MODAL_TYPES;

  open(type: MODAL_TYPES, item: TransportationItem): void {
    this.openModal.emit({ type, item });
  }
}
