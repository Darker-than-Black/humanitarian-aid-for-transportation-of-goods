import { ApiTransportationItem, TransportationItem } from '../../type';

export interface ITransportationItemDirector {
  build(i: ApiTransportationItem): TransportationItem
}
