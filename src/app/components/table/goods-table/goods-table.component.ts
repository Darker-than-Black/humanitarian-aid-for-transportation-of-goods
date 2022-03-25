import { Table } from 'primeng/table';
import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';

import { MODAL_TYPES } from '../../../configs/modalTypes';
import { OpenModalEvent, TableColumnConfig } from '../../../type';

const DEFAULT_MODAL_VISIBLE_HANDLER = () => true;

@Component({
  selector: 'app-goods-table',
  templateUrl: './goods-table.component.html',
  styleUrls: ['./goods-table.component.css']
})
export class GoodsTableComponent<T> {
  @Input() data: T[] = [];
  @Input() config: TableColumnConfig[] = [];
  @Input() loading: boolean = false;

  @Output() openModal = new EventEmitter<OpenModalEvent<T>>();

  @ViewChild('tableRef') tableRef!: Table;
  @ViewChild('upScrollRef') upScrollRef!: any;
  @ViewChild('upScrollRowRef') upScrollRowRef!: any;

  @ViewChild('defaultTemplate') defaultTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('priorityTemplate') priorityTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('additionTemplate') additionTemplate!: TemplateRef<HTMLElement>;

  get filterableFields(): string[] {
    return this.config
      .filter(({filterable}) => filterable)
      .map(({field}) => field);
  }

  ngAfterViewInit() {
    const block = this.tableRef.el.nativeElement.querySelector('.p-datatable-wrapper');
    const {offsetWidth: tableWidth} = block.querySelector('table');

    this.upScrollRowRef.nativeElement.style.width = `${tableWidth}px`;

    this.upScrollRef.nativeElement.onscroll = () => {
      block.scrollLeft = this.upScrollRef.nativeElement.scrollLeft;
    };

    block.onscroll = () => {
      this.upScrollRef.nativeElement.scrollLeft = block.scrollLeft;
    };

  }

  open(type: MODAL_TYPES, item: T): void {
    this.openModal.emit({ type, item });
  }

  customTemplate(config: TableColumnConfig, item: T): any {
    const {field, modalType, modalVisibleHandler = DEFAULT_MODAL_VISIBLE_HANDLER} = config;

    switch (true) {
      case field === 'additionLength':
        return this.additionTemplate;
      case field === 'priority':
        return this.priorityTemplate;
      case modalType !== undefined && modalVisibleHandler(item):
        return this.modalTemplate;
      default:
        return this.defaultTemplate;
    }
  }
}
