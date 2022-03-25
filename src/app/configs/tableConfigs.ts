import {MODAL_TYPES} from './modalTypes';
import {TableColumnConfig, TransportationItem} from '../type';

export const GOODS_TABLE_CONFIG: TableColumnConfig[] = [
  {
    header: '№ п/п',
    field: 'id',
    filterable: true,
  },
  {
    header: 'Ідентифікатор партії',
    field: 'name',
    filterable: true,
    modalType: MODAL_TYPES.ITEMS,
    modalVisibleHandler: ({items = []}: TransportationItem) => Boolean(items.length),
  },
  {
    header: 'Пріоритет',
    field: 'priority',
    filterable: true,
    modalType: MODAL_TYPES.PRIORITY,
  },
  {
    header: 'Дата створення партії',
    field: 'created_format',
    filterable: true,
  },
  {
    header: 'Отримувач',
    field: 'recipient',
    modalType: MODAL_TYPES.RECIPIENT,
    filterable: true,
  },
  {
    header: 'Відправник',
    field: 'sender',
    modalType: MODAL_TYPES.SENDER,
    filterable: true,
  },
  {
    header: 'Координатор',
    field: 'coordinator.name',
    modalType: MODAL_TYPES.COORDINATOR,
    filterable: true,
  },
  {
    header: 'Статус',
    field: 'status_name',
    filterable: true,
    modalType: MODAL_TYPES.STATUS,
  },
  {
    header: 'Довантаження ',
    field: 'additionLength',
    modalType: MODAL_TYPES.ADDITION,
    filterable: true,
  },
  {
    header: 'Об’єм партії, м3',
    field: 'volume',
    filterable: true,
  },
  {
    header: 'Вага партії, кг',
    field: 'weight',
    filterable: true,
  },
  {
    header: 'Температурний контроль',
    field: 'temperature',
    filterable: true,
  },
  {
    header: 'Транспорт',
    field: 'transportName',
    filterable: true,
    modalType: MODAL_TYPES.TRANSPORT,
  },
  {
    header: 'Водій',
    field: 'driverName',
    filterable: true,
    modalType: MODAL_TYPES.DRIVER,
  },
  {
    header: 'Проміжний пункт призначення',
    field: 'provisional_destination',
    filterable: true,
    modalType: MODAL_TYPES.PROVISIONAL_DESTINATION,
  },
  {
    header: 'Поточне місцезнаходження',
    field: 'location',
    filterable: true,
    modalType: MODAL_TYPES.LOCATION,
  },
  {
    header: 'Коментар',
    field: 'comment',
    filterable: true,
    modalType: MODAL_TYPES.COMMENT,
  },
];

export const ITEMS_TABLE_CONFIG: TableColumnConfig[] = [
  {
    field: 'name',
    header: 'Назва',
  },
  {
    field: 'dosage',
    header: 'Форма випуску/Од. виміру',
  },
  {
    field: 'fact_quantity',
    header: 'Кількість',
  },
];

export const ADDITION_TABLE_CONFIG: TableColumnConfig[] = [
  {
    field: 'sender_name',
    header: 'Назва відправника',
  },
  {
    field: 'sender_address',
    header: 'Адреса відправника',
  },
  {
    field: 'sender_contact',
    header: 'Контактна особа відправника',
  },
  {
    field: 'sender_phone',
    header: 'Контактний телефон відправника',
  },
  {
    header: 'Об’єм партії, м3',
    field: 'volume',
  },
  {
    header: 'Вага партії, кг',
    field: 'weight',
  },
  {
    header: 'Температурний контроль',
    field: 'temperature',
  },
  {
    header: 'Статус',
    field: 'status',
  },
  {
    header: 'Коментар',
    field: 'comment',
  },
];