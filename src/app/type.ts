import { EventEmitter } from '@angular/core';
import { MODAL_TYPES } from './configs/modalTypes';

export interface ApiTransportationItem {
  created?: string
  comment?: string
  location?: string
  provisional_destination?: string
  status_name: string
  id: string
  name: string
  total: string
  sender: string
  driver: Driver
  volume?: string
  recipient: string
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
  id: string
  name: string
  total: string
  sender: string
  volume: string
  recipient: string
  status: string
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
}

export interface Item {
  id: string
  dosage: string
  fact_quantity: string
  item_id: string
  name: string
}

export interface TableColumnConfig {
  field: string
  header: string
  filterable?: boolean
  modalType?: MODAL_TYPES
  viewHandler?: (data: any) => string | number
  modalVisibleHandler?:(item: any) => boolean
}

export interface ViewListItem {
  key: string
  label: string
}

export interface OpenModalEvent<T> {
  type: MODAL_TYPES
  item: T
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