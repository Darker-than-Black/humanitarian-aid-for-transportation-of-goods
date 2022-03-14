import { MODAL_TYPES } from './modalTypes';
import { DriverFormComponent } from '../components/forms/driver-form/driver-form.component';
import { TransportFormComponent } from '../components/forms/transport-form/transport-form.component';
import { StatusFormComponent } from '../components/forms/status-form/status-form.component';
import { LocationFormComponent } from '../components/forms/location-form/location-form.component';
import { CommentFormComponent } from '../components/forms/comment-form/comment-form.component';
import { ProvisionalDestinationFormComponent } from '../components/forms/provisional-destination-form/provisional-destination-form.component';

export const modalFormDictionary = new Map<string, any>()
  .set(MODAL_TYPES.DRIVER, DriverFormComponent)
  .set(MODAL_TYPES.TRANSPORT, TransportFormComponent)
  .set(MODAL_TYPES.STATUS, StatusFormComponent)
  .set(MODAL_TYPES.LOCATION, LocationFormComponent)
  .set(MODAL_TYPES.COMMENT, CommentFormComponent)
  .set(MODAL_TYPES.PROVISIONAL_DESTINATION, ProvisionalDestinationFormComponent);
