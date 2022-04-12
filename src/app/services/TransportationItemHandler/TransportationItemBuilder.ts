import { set } from 'lodash';
import { ApiTransportationItem, TransportationItem } from '../../type';
import { getPreviewDriver, getPreviewTransport, formatDate } from '../../utils';

export interface ITransportationItemBuilder extends Record<string, any> {
  getResult(): TransportationItem
  reset(): ITransportationItemBuilder
  setReadonly(): ITransportationItemBuilder
  setDefaultField(i: ApiTransportationItem, k: string): ITransportationItemBuilder
  setDriverName(i: ApiTransportationItem): ITransportationItemBuilder
  setTransportName(i: ApiTransportationItem): ITransportationItemBuilder
  setItems(i: ApiTransportationItem): ITransportationItemBuilder
  setCreated(i: ApiTransportationItem): ITransportationItemBuilder
  setAdditionLength(i: ApiTransportationItem): ITransportationItemBuilder
}

export class TransportationItemBuilder implements ITransportationItemBuilder {
  private data: TransportationItem | Record<string, any> = {};

  constructor(private readonly readonly: boolean) {}

  getResult(): TransportationItem {
    return this.data as TransportationItem;
  }

  reset(): ITransportationItemBuilder {
    this.data = {};
    return this;
  }

  setReadonly(): ITransportationItemBuilder {
    this.setValue('readonly', this.readonly, false);
    return this;
  }

  setDefaultField(item: ApiTransportationItem, key: string): ITransportationItemBuilder {
    this.setValue(key, (item as Record<string, any>)[key]);
    return this;
  }

  setDriverName({driver}: ApiTransportationItem): ITransportationItemBuilder {
    this.setValue('driverName', getPreviewDriver(driver));
    return this;
  }

  setTransportName({transport}: ApiTransportationItem): ITransportationItemBuilder {
    this.setValue('transportName', getPreviewTransport(transport));
    return this;
  }

  setItems({items}: ApiTransportationItem): ITransportationItemBuilder {
    this.setValue('items', items || []);
    return this;
  }

  setCreated({created}: ApiTransportationItem): ITransportationItemBuilder {
    const date = created ? formatDate(created) : '';
    this.setValue('created_format', date);
    return this;
  }

  setAdditionLength({addition = []}: ApiTransportationItem): ITransportationItemBuilder {
    this.setValue('additionLength', addition.length);
    return this;
  }

  private setValue(key: string, value: any, defaultValue: any = ''): void {
    set(this.data, key, value || defaultValue);
  }
}
