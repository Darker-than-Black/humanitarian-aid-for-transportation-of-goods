import { Component, OnInit, Type, ViewChild } from '@angular/core';

import { MODAL_TYPES } from './configs/modalTypes';
import { ApiService } from './services/api.service';
import { modalDictionary } from './configs/modalDictionary';
import { GOODS_TABLE_CONFIG } from './configs/tableConfigs';
import { modalTitleDictionary } from './configs/modalTitleDictionary';
import { ModalContentDirective } from './directives/modal-content.directive';
import { DEFAULT_MODAL_SETTINGS, modalSettingsDictionary } from './configs/modalSettings';
import { FormComponent, ModalSettings, TransportationItem, TableColumnConfig } from './type';
import { TransportationItemDirector } from './services/TransportationItemHandler/TransportationItemDirector';

const itemBuilder = new TransportationItemDirector();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  loading: boolean = false;
  data: TransportationItem[] = [];
  modalTitle: string = '';
  modalType: string = '';
  tableConfig = GOODS_TABLE_CONFIG;

  get modalSettings(): ModalSettings {
    const settings = modalSettingsDictionary.get(this.modalType);
    return settings || DEFAULT_MODAL_SETTINGS;
  }

  @ViewChild(ModalContentDirective, {static: true}) fromDirective!: ModalContentDirective;

  ngOnInit() {
    this.loading = true;

    this.apiService.getTransportationOfGoods()
      .subscribe((data) => {
        this.data = data.map(item => itemBuilder.build(item));
        this.loading = false;
      });
  }

  openModal(type: string, item:TransportationItem): void {
    const component = modalDictionary.get(type);

    if (!component) { return; }

    this.modalType = type;
    this.setTitle(type);
    this.setFormComponent(component, item);
  }

  defaultModalTemplate({key}: TableColumnConfig): boolean {
    return ['recipient', 'sender', 'coordinator.name', 'status_name', 'transportName', 'driverName', 'provisional_destination', 'location', 'comment'].includes(key);
  }

  private setTitle(type: string): void {
    this.modalTitle = modalTitleDictionary.get(type) || '';
  }

  private setFormComponent(component: Type<FormComponent>, data: TransportationItem): void {
    this.fromDirective.viewContainerRef.clear();
    const componentRef = this.fromDirective.viewContainerRef.createComponent<FormComponent>(component);
    // set props
    componentRef.instance.data = data;
    // auto close modal
    componentRef.instance.finally.subscribe(data => {
      this.setTitle('');
      this.data = this.data.map(el => el.id === data.id ? itemBuilder.build(data) : el);
    });
  }
}
