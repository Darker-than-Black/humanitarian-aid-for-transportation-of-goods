import { EventEmitter } from '@angular/core';
import { MODAL_TYPES } from './configs/modalTypes';

export interface ApiTransportationItem {
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
}

export interface TransportationItem {
  comment?: string
  location?: string
  provisional_destination?: string
  status_name: string
  id: string
  name: string
  total: string
  sender: string
  volume?: string
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
}

export interface TableColumnConfig {
  field: string
  header: string
}

export interface OpenModalEvent {
  type: MODAL_TYPES
  item: TransportationItem
}

export interface FormComponent {
   data: TransportationItem;
   finally: EventEmitter<ApiTransportationItem>;
}

export interface ServerResponse<T> {
  success: boolean
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
