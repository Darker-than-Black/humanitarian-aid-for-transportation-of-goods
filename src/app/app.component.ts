import {MedTableColumnConfig} from 'med-table';
import {Component, OnInit, Type, ViewChild} from '@angular/core';

import {ApiService} from './services/api.service';
import {modalDictionary} from './configs/modalDictionary';
import {NotificationService} from './services/notification.service';
import {modalTitleDictionary} from './configs/modalTitleDictionary';
import {GOODS_TABLE_CONFIG, TABLE_BTN_COLUMN} from './configs/tableConfigs';
import {ModalContentDirective} from './directives/modal-content.directive';
import {DEFAULT_MODAL_SETTINGS, modalSettingsDictionary} from './configs/modalSettings';
import {ApiTransportationItem, FormComponent, ModalSettings, TableColumnConfig, TransportationItem} from './type';
import {TransportationItemDirector} from './services/TransportationItemHandler/TransportationItemDirector';
import {TravelLetterBuilder} from './services/TravelLetterHandler/TravelLetterBuilder';
import {SheetsGenerator} from './services/TravelLetterHandler/SheetsGenerator/SheetsGenerator';
import {notificationMessages} from './configs/notificationMessages';
import {NOTIFICATION_TYPES} from './configs/notificationTypes';
import {READONLY_KEYS} from './configs/readonlyKeys';

const itemBuilder = new TransportationItemDirector();
const travelLetterBuilder = new TravelLetterBuilder();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService, public notification: NotificationService) {}

  loading: boolean = false;
  data: TransportationItem[] = [];
  modalTitle: string = '';
  modalType: string = '';
  tableConfig: MedTableColumnConfig[] = GOODS_TABLE_CONFIG;
  selectedIds: string[] = [];
  readonly: boolean = false;
  clearItem?: TransportationItem;

  get modalSettings(): ModalSettings {
    const settings = modalSettingsDictionary.get(this.modalType);
    return settings || DEFAULT_MODAL_SETTINGS;
  }

  @ViewChild(ModalContentDirective, {static: true}) fromDirective!: ModalContentDirective;

  ngOnInit() {
    this.loading = true;

    this.apiService.getTransportationOfGoods().subscribe(({data, readonly}) => {
      if (!readonly) {
        this.tableConfig = GOODS_TABLE_CONFIG.concat(TABLE_BTN_COLUMN);
      }
      this.data = data.map(item => itemBuilder.build(item, readonly));
      this.readonly = readonly;
      this.loading = false;
    });
  }

  openModal(type: string, item: TransportationItem): void {
    const component = modalDictionary.get(type);

    if (!component) { return; }

    this.modalType = type;
    this.setTitle(type);
    this.setFormComponent(component, item);
  }

  defaultModalTemplate({isDefaultModalTemplate, key}: TableColumnConfig, {readonly}: TransportationItem): boolean {
    return Boolean(isDefaultModalTemplate) && !(READONLY_KEYS.includes(key) && readonly);
  }

  exportTravelLetter(): void {
    this.apiService.getTravelLetters(this.selectedIds).subscribe(data => {
      try {
        const list = travelLetterBuilder.build(data);
        const generator = new SheetsGenerator(list);
        generator.generate('Маршрутний_лист', travelLetterBuilder.dateRange);
        this.notification.add(notificationMessages.exportTravelLetterSuccess, NOTIFICATION_TYPES.SUCCESS);
      } catch {
        this.notification.add(notificationMessages.exportTravelLetterError, NOTIFICATION_TYPES.ERROR);
      }
    })
  }

  clearLogistic(item: TransportationItem): void {
    this.clearItem = item;
    this.notification.addConfirmOfDeleteItem(`Очистити дані по поставці ${item.name}?`);
  }

  onConfirmToClear(): void {
    this.apiService.clearLogistic({...this.clearItem, clear: 1} as any).subscribe(item => {
      if (item) this.updateItem(item);
      this.clearItem = undefined;
      this.notification.clearConfirmModal();
    });
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
    componentRef.instance.finally.subscribe(item => {
      this.setTitle('');
      this.updateItem(item);
    });
  }

  private updateItem(item: ApiTransportationItem): void {
    this.data.forEach(el => {
      if (el.id === item.id) {
        const newItem = itemBuilder.build(item, this.readonly);
        Object.entries(newItem).forEach(([key, value]) => el[key] = value);
      }
    });
  }
}
