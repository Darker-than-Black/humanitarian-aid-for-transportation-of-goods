import { Component, OnInit, Type, ViewChild } from '@angular/core';

import { ApiService } from './services/api.service';
import { FromTypeDirective } from './directives/from-type.directive';
import { modalFormDictionary } from './configs/modalFormDictionary';
import { modalTitleDictionary } from './configs/modalTitleDictionary';
import { FormComponent, OpenModalEvent, TransportationItem } from './type';
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

  @ViewChild(FromTypeDirective, {static: true}) fromDirective!: FromTypeDirective;

  ngOnInit() {
    this.loading = true;

    this.apiService.getTransportationOfGoods()
      .subscribe((data) => {
        this.data = data.map(item => itemBuilder.build(item));
        this.loading = false;
      });
  }

  openModal({type, item}: OpenModalEvent): void {
    const component = modalFormDictionary.get(type);

    if (!component) { return; }

    this.setTitle(type);
    this.setFormComponent(component, item);
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
      console.log(itemBuilder.build(data));
    });
  }
}
