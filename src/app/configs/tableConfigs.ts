import { FILTER_TYPES } from 'med-table';
import { MODAL_TYPES } from './modalTypes';
import { TableColumnConfig } from '../type';

export const GOODS_TABLE_CONFIG: TableColumnConfig[] = [
  {
    label: '№ п/п',
    key: 'id',
    filterable: true,
  },
  {
    label: 'Ідентифікатор партії',
    key: 'name',
    filterable: true,
    modalType: MODAL_TYPES.ITEMS,
  },
  {
    label: 'Пріоритет',
    key: 'priority.name',
    filterable: true,
    modalType: MODAL_TYPES.PRIORITY,
  },
  {
    label: 'Дата створення партії',
    key: 'created_format',
    sortKey: 'created',
    filterable: true,
    filterType: FILTER_TYPES.DATE,
  },
  {
    label: 'Отримувач',
    key: 'recipient',
    filterable: true,
    modalType: MODAL_TYPES.RECIPIENT,
    isDefaultModalTemplate: true,
    filterType: FILTER_TYPES.SELECT,
  },
  {
    label: 'Відправник',
    key: 'sender',
    filterable: true,
    modalType: MODAL_TYPES.SENDER,
    isDefaultModalTemplate: true,
  },
  {
    label: 'Регіон відправника',
    key: 'sender_region',
    filterable: true,
    filterType: FILTER_TYPES.SELECT,
  },
  {
    label: 'Координатор',
    key: 'coordinator.name',
    filterable: true,
    modalType: MODAL_TYPES.COORDINATOR,
    isDefaultModalTemplate: true,
  },
  {
    label: 'Статус',
    key: 'status_name',
    filterable: true,
    modalType: MODAL_TYPES.STATUS,
    isDefaultModalTemplate: true,
  },
  {
    label: 'Довантаження',
    key: 'additionLength',
    filterable: true,
    modalType: MODAL_TYPES.ADDITION,
    defaultValue: '',
  },
  {
    label: 'Об’єм партії, палети',
    key: 'volume',
    filterable: true,
  },
  {
    label: 'Вага партії, кг',
    key: 'weight',
    filterable: true,
  },
  {
    label: 'Температурний контроль',
    key: 'temperature',
    filterable: true,
  },
  {
    label: 'Транспорт',
    key: 'transportName',
    filterable: true,
    modalType: MODAL_TYPES.TRANSPORT,
    isDefaultModalTemplate: true,
  },
  {
    label: 'Водій',
    key: 'driverName',
    filterable: true,
    modalType: MODAL_TYPES.DRIVER,
    isDefaultModalTemplate: true,
  },
  {
    label: 'Проміжний пункт призначення',
    key: 'provisional_destination',
    filterable: true,
    modalType: MODAL_TYPES.PROVISIONAL_DESTINATION,
    isDefaultModalTemplate: true,
  },
  {
    label: 'Поточне місцезнаходження',
    key: 'location',
    filterable: true,
    modalType: MODAL_TYPES.LOCATION,
    isDefaultModalTemplate: true,
  },
  {
    label: 'Коментар',
    key: 'comment',
    filterable: true,
    modalType: MODAL_TYPES.COMMENT,
    isDefaultModalTemplate: true,
  },
];

export const ITEMS_TABLE_CONFIG: TableColumnConfig[] = [
  {
    key: 'name',
    label: 'Назва',
  },
  {
    key: 'dosage',
    label: 'Форма випуску/Од. виміру',
  },
  {
    key: 'fact_quantity',
    label: 'Кількість',
  },
];

export const ADDITION_TABLE_CONFIG: TableColumnConfig[] = [
  {
    key: 'sender_name',
    label: 'Назва відправника',
  },
  {
    key: 'sender_address',
    label: 'Адреса відправника',
  },
  {
    key: 'sender_contact',
    label: 'Контактна особа відправника',
  },
  {
    key: 'sender_phone',
    label: 'Контактний телефон відправника',
  },
  {
    label: 'Об’єм партії, палети',
    key: 'volume',
  },
  {
    label: 'Вага партії, кг',
    key: 'weight',
  },
  {
    label: 'Температурний контроль',
    key: 'temperature',
  },
  {
    label: 'Статус',
    key: 'status',
  },
  {
    label: 'Коментар',
    key: 'comment',
  },
];
