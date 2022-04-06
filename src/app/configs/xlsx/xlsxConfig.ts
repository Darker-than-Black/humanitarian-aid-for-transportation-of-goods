import { ColInfo, RowInfo } from 'xlsx-js-style'

export const DETAILS_KEYS: string[] = ['name', 'phone', 'contact', 'address'];

export const TABLE_HEADER_KEYS: string[] = [
  '№',
  'Назва',
  'К-ть упаковок',
  'Об\'єм, палети',
  'Вага приблизно, кг',
  'Отримувач',
];

export const SHEET_TITLE_LIST: string[] = [
  'Міністерство охорони здоров\'я України',
  '01601, м. Київ, вул. Грушевського, 7',
  'Телефон: (044) 253-61-94',
  'Факс: (044) 253-40-17',
  'moz@moz.gov.ua',
];

export const WORKSHEET_COLS: ColInfo[] = [
  { wch: 5 },
  { wch: 35 },
  { wch: 15 },
  { wch: 17 },
  { wch: 17 },
  { wch: 55 },
];

export const WORKSHEET_ROWS: RowInfo[] = [
  { hpt: 25 },
  { hpt: 25 },
  { hpt: 25 },
  { hpt: 25 },
  { hpt: 25 },
  { hpt: 25 },
];
