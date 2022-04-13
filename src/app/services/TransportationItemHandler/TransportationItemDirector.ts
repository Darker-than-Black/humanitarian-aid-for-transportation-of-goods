import { ApiTransportationItem, TransportationItem } from '../../type';
import { TRANSPORTATION_ITEM_KEYS } from '../../configs/transportationItemKeys';
import { transportationItemBuilderMethods } from '../../configs/transportationItemBuilderMethods';
import { TransportationItemBuilder, ITransportationItemBuilder } from './TransportationItemBuilder';

export interface ITransportationItemDirector {
  build(i: ApiTransportationItem, readonly: boolean): TransportationItem
}

export class TransportationItemDirector implements ITransportationItemDirector {
  build(item: ApiTransportationItem, readonly: boolean): TransportationItem {
    const builder: ITransportationItemBuilder = new TransportationItemBuilder(readonly);
    builder.reset().setReadonly();

    Object.keys(item).forEach(key => {
      if (!TRANSPORTATION_ITEM_KEYS.includes(key)) return;

      const methodList = transportationItemBuilderMethods.get(key);

      if (methodList === undefined) {
        builder.setDefaultField(item, key);
      } else {
        methodList.forEach(method => {
          builder[method](item, key);
        });
      }
    });

    return builder.getResult();
  }
}
