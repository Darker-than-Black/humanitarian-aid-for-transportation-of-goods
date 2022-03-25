import { MODAL_TYPES } from './modalTypes';
import { DriverFormComponent } from '../components/modal-contents/driver-form/driver-form.component';
import { TransportFormComponent } from '../components/modal-contents/transport-form/transport-form.component';
import { StatusFormComponent } from '../components/modal-contents/status-form/status-form.component';
import { LocationFormComponent } from '../components/modal-contents/location-form/location-form.component';
import { CommentFormComponent } from '../components/modal-contents/comment-form/comment-form.component';
import { ProvisionalDestinationFormComponent } from '../components/modal-contents/provisional-destination-form/provisional-destination-form.component';
import { SenderInfoComponent } from '../components/modal-contents/sender-info/sender-info.component';
import { RecipientInfoComponent } from '../components/modal-contents/recipient-info/recipient-info.component';
import { ItemsInfoComponent } from '../components/modal-contents/items-info/items-info.component';
import { PriorityFormComponent } from '../components/modal-contents/priority-form/priority-form.component';
import { AdditionInfoComponent } from '../components/modal-contents/addition-info/addition-info.component';
import { CoordinatorFormComponent } from '../components/modal-contents/coordinator-form/coordinator-form.component';

export const modalDictionary = new Map<string, any>()
  .set(MODAL_TYPES.DRIVER, DriverFormComponent)
  .set(MODAL_TYPES.TRANSPORT, TransportFormComponent)
  .set(MODAL_TYPES.STATUS, StatusFormComponent)
  .set(MODAL_TYPES.LOCATION, LocationFormComponent)
  .set(MODAL_TYPES.SENDER, SenderInfoComponent)
  .set(MODAL_TYPES.RECIPIENT, RecipientInfoComponent)
  .set(MODAL_TYPES.COMMENT, CommentFormComponent)
  .set(MODAL_TYPES.ITEMS, ItemsInfoComponent)
  .set(MODAL_TYPES.PRIORITY, PriorityFormComponent)
  .set(MODAL_TYPES.ADDITION, AdditionInfoComponent)
  .set(MODAL_TYPES.COORDINATOR, CoordinatorFormComponent)
  .set(MODAL_TYPES.PROVISIONAL_DESTINATION, ProvisionalDestinationFormComponent);
