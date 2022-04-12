import {Component, OnInit, Type, ViewChild} from '@angular/core';

import {ApiService} from './services/api.service';
import {modalDictionary} from './configs/modalDictionary';
import {GOODS_TABLE_CONFIG} from './configs/tableConfigs';
import {NotificationService} from './services/notification.service';
import {modalTitleDictionary} from './configs/modalTitleDictionary';
import {ModalContentDirective} from './directives/modal-content.directive';
import {DEFAULT_MODAL_SETTINGS, modalSettingsDictionary} from './configs/modalSettings';
import {FormComponent, ModalSettings, TableColumnConfig, TransportationItem} from './type';
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
  constructor(private apiService: ApiService, private notification: NotificationService) {}

  loading: boolean = false;
  data: TransportationItem[] = [];
  modalTitle: string = '';
  modalType: string = '';
  tableConfig = GOODS_TABLE_CONFIG;
  selectedIds: string[] = [];
  readonly: boolean = false;

  get modalSettings(): ModalSettings {
    const settings = modalSettingsDictionary.get(this.modalType);
    return settings || DEFAULT_MODAL_SETTINGS;
  }

  @ViewChild(ModalContentDirective, {static: true}) fromDirective!: ModalContentDirective;

  ngOnInit() {
    this.loading = true;

    this.apiService.getTransportationOfGoods().subscribe(({data, readonly}) => {
      this.data = data.map(item => itemBuilder.build(item, readonly));
      this.readonly = readonly;
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
      this.data = this.data.map(el => el.id === data.id ? itemBuilder.build(data, this.readonly) : el);
    });
  }
}
