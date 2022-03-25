import {ApiTransportationItem, TransportationItem} from '../../type';

export interface ITransportationItemBuilder extends Record<string, any> {
  getResult(): TransportationItem
  reset(): ITransportationItemBuilder
  setDefaultField(i: ApiTransportationItem, k: string): ITransportationItemBuilder
  setDriverName(i: ApiTransportationItem): ITransportationItemBuilder
  setTransportName(i: ApiTransportationItem): ITransportationItemBuilder
  setItems(i: ApiTransportationItem): ITransportationItemBuilder
  setCreated(i: ApiTransportationItem): ITransportationItemBuilder
  setAdditionLength(i: ApiTransportationItem): ITransportationItemBuilder
}
