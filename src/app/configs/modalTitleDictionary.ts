import {MODAL_TYPES} from './modalTypes';

export const modalTitleDictionary = new Map<string, string>()
  .set(MODAL_TYPES.DRIVER, 'Зміна водія')
  .set(MODAL_TYPES.ADDITION, 'Інформація про довантаження')
  .set(MODAL_TYPES.ITEMS, 'Інформація про медикаменти')
  .set(MODAL_TYPES.RECIPIENT, 'Інформація про отримувача')
  .set(MODAL_TYPES.SENDER, 'Інформація про відправника')
  .set(MODAL_TYPES.TRANSPORT, 'Зміна транспорту')
  .set(MODAL_TYPES.STATUS, 'Зміна статусу')
  .set(MODAL_TYPES.LOCATION, 'Зміна поточного місцезнаходження')
  .set(MODAL_TYPES.PROVISIONAL_DESTINATION, 'Зміна проміжного пункту призначення')
  .set(MODAL_TYPES.PRIORITY, 'Зміна пріоритету')
  .set(MODAL_TYPES.COORDINATOR, 'Взяти в роботу')
  .set(MODAL_TYPES.COMMENT, 'Зміна коментаря');
