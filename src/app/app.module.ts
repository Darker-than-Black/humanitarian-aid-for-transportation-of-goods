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
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { MedTableModule } from 'med-table';
import { MedDynamicFormModule } from 'med-dynamic-form';

import { AppComponent } from './app.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { ModalContentDirective } from './directives/modal-content.directive';
import { TabsComponent } from './components/tabs/tabs/tabs.component';
import { DriverFormComponent } from './components/modal-contents/driver-form/driver-form.component';
import { TransportFormComponent } from './components/modal-contents/transport-form/transport-form.component';
import { StatusFormComponent } from './components/modal-contents/status-form/status-form.component';
import { LocationFormComponent } from './components/modal-contents/location-form/location-form.component';
import { CommentFormComponent } from './components/modal-contents/comment-form/comment-form.component';
import { ProvisionalDestinationFormComponent } from './components/modal-contents/provisional-destination-form/provisional-destination-form.component';
import { SenderInfoComponent } from './components/modal-contents/sender-info/sender-info.component';
import { RecipientInfoComponent } from './components/modal-contents/recipient-info/recipient-info.component';
import { ItemsInfoComponent } from './components/modal-contents/items-info/items-info.component';
import { PriorityFormComponent } from './components/modal-contents/priority-form/priority-form.component';
import { AdditionInfoComponent } from './components/modal-contents/addition-info/addition-info.component';
import { CoordinatorFormComponent } from './components/modal-contents/coordinator-form/coordinator-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabsComponent,
    ModalContentDirective,
    DriverFormComponent,
    TransportFormComponent,
    StatusFormComponent,
    LocationFormComponent,
    CommentFormComponent,
    ProvisionalDestinationFormComponent,
    SenderInfoComponent,
    RecipientInfoComponent,
    ItemsInfoComponent,
    PriorityFormComponent,
    AdditionInfoComponent,
    CoordinatorFormComponent,
  ],
  imports: [
    MedTableModule,
    MedDynamicFormModule,
    FormsModule,
    ToastModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ListboxModule,
    BrowserModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
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
