import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppComponent } from './app.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { FromTypeDirective } from './directives/from-type.directive';
import { TabsComponent } from './components/tabs/tabs/tabs.component';
import { DriverFormComponent } from './components/forms/driver-form/driver-form.component';
import { GoodsTableComponent } from './components/table/goods-table/goods-table.component';
import { TransportFormComponent } from './components/forms/transport-form/transport-form.component';
import { GoodsTableDataComponent } from './components/table/goods-table-data/goods-table-data.component';
import { StatusFormComponent } from './components/forms/status-form/status-form.component';
import { LocationFormComponent } from './components/forms/location-form/location-form.component';
import { CommentFormComponent } from './components/forms/comment-form/comment-form.component';
import { ProvisionalDestinationFormComponent } from './components/forms/provisional-destination-form/provisional-destination-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabsComponent,
    FromTypeDirective,
    DriverFormComponent,
    GoodsTableComponent,
    TransportFormComponent,
    GoodsTableDataComponent,
    StatusFormComponent,
    LocationFormComponent,
    CommentFormComponent,
    ProvisionalDestinationFormComponent,
  ],
  imports: [
    FormsModule,
    ToastModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ListboxModule,
    BrowserModule,
    CheckboxModule,
    InputTextModule,
    InputMaskModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
