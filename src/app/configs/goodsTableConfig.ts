import { TableColumnConfig } from '../type';

export const GOODS_TABLE_CONFIG: TableColumnConfig[] = [
  { header: '№ п/п', field: 'id' },
  { header: 'Ідентифікатор партії', field: 'name' },
  { header: 'Отримувач', field: 'recipient' },
  { header: 'Відправник', field: 'sender' },
  { header: 'Об’єм партії', field: 'volume' },
  { header: 'Температурний контроль', field: 'temperature' },
  { header: 'Статус', field: 'status_name' },
  { header: 'Транспорт', field: 'transportName' },
  { header: 'Водій', field: 'driverName' },
  { header: 'Проміжний пункт призначення', field: 'provisional_destination' },
  { header: 'Поточне місцезнаходження', field: 'location' },
  { header: 'Коментар', field: 'comment' },
];
