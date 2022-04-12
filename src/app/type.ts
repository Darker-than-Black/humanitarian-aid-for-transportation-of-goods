import { EventEmitter } from '@angular/core';
import { MODAL_TYPES } from './configs/modalTypes';
import {MedTableColumnConfig} from "med-table";

export interface ApiTransportationItem {
  created?: string
  comment?: string
  location?: string
  provisional_destination?: string
  id: string
  name: string
  total: string
  sender: string
  driver: Driver
  volume?: string
  recipient: string
  status_name: string
  status: string
  temperature: boolean
  transport: Transport
  coordinator: {
    id: string | null
    name: string | null
  }
  recipient_name?: string
  recipient_phone?: string
  recipient_address?: string
  recipient_contact?: string
  sender_address?: string
  sender_contact?: string
  sender_name?: string
  sender_phone?: string
  weight?: string
  items?: Item[]
  priority: Priority
  addition?: Addition[]
}

export interface TransportationItem {
  weight: string
  created: string
  created_format: string
  comment: string
  location: string
  provisional_destination: string
  status_name: string
  status: string
  id: string
  name: string
  total: string
  sender: string
  volume: string
  recipient: string
  temperature: boolean
  driver: Driver
  transport: Transport
  driverName: string
  transportName: string
  coordinator: {
    id: string | null
    name: string | null
  }
  recipient_name: string
  recipient_phone: string
  recipient_address: string
  recipient_contact: string
  sender_address: string
  sender_contact: string
  sender_name: string
  sender_phone: string
  items: Item[]
  priority: Priority
  addition?: Addition[]
  additionLength: string
  readonly: boolean
}

export interface Item {
  id: string
  dosage: string
  fact_quantity: string
  item_id: string
  name: string
}

export interface TableColumnConfig extends MedTableColumnConfig {
  modalType?: MODAL_TYPES
  isDefaultModalTemplate?: boolean
}

export interface ViewListItem {
  key: string
  label: string
}

export interface ModalSettings {
  modal: boolean
  maximizable: boolean
  breakpoints: Record<string, string>
  style: Record<string, string>
}

export interface FormComponent {
   data: TransportationItem;
   finally: EventEmitter<ApiTransportationItem>;
}

export interface ServerResponse<T> {
  success: boolean
  error?: string
  data: T
}

export interface GetDataServerResponse extends ServerResponse<ApiTransportationItem[]> {
  readonly: boolean
}

export interface Driver {
  id?: string
  name?: string
  phone?: string
}

export interface Transport {
  id?: string
  name?: string
  type?: string
  capacity?: string
  comment?: string
  regular?: string
  temperature?: string
  volume?: string
}

export interface Status {
  code: string
  name: string
}

export interface DriverForm {
  name: string
  contact_phone: string
  comment: string
}

export interface TransportForm {
  type: string
  name: string
  capacity: string
  volume: string
  temperature: boolean
  regular: boolean
  comment: string
}

export interface Priority {
  code: string
  color: string
  name: string
}

export interface Addition {
  id: string
  comment?: string
  created?: string
  logistics_id?: string
  sender_address?: string
  sender_contact?: string
  sender_id?: string
  sender_name?: string
  sender_phone?: string
  status?: string
  temperature?: string
  updated?: string
  userid?: string
  volume?: string
  weight?: string
}

/*       TravelLetter       */
export interface BatchItem {
  id?: string
  name?: string
  quantity?: string
}

export interface Batch {
  volume?: string
  weight?: string
  items: BatchItem[]
}

export interface Details {
  name?: string
  phone?: string
  contact?: string
  address?: string
}

export interface SenderRecipient {
  details: Details
  batches: Batch[]
}

export interface Sender {
  details: Details
  recipients: SenderRecipient[]
}

export interface Driver {
  name?: string
  phone?: string
}

export interface TravelLetter {
  drivers: Driver[]
  senders: Sender[]
  details: {
    type?: string,
    num?: string
  }
}

export interface ApiTravelLetter {
  details?: {
    type?: string,
    num?: string
  }
  drivers?: Record<string, Driver>
  senders?: Record<string, {
    details?: Details
    recipients?: Record<string, {
      details?: Details
      batches?: Record<string, {
        volume?: string
        weight?: string
        items?: BatchItem[]
      }>
    }>
  }>
}

export interface DateRange {
  start: string
  end: string
}
