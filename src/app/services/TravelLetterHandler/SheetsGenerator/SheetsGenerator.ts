import * as XLSX from 'xlsx-js-style'
import {DateRange, TravelLetter} from '../../../type'
import { WorkSheetSettings } from './WorkSheetSettings'
import { TravelLetterTemplate } from './TravelLetterTemplate'
import { RowBuilder, RowBuilderInterface } from './RowBuilder'
import { SHEET_TITLE_LIST } from '../../../configs/xlsx/xlsxConfig'

export interface SheetsGeneratorInterface {
  generate (fileName: string, { start, end }: DateRange): void
}

export class SheetsGenerator implements SheetsGeneratorInterface {
  private readonly settings = new WorkSheetSettings();
  private readonly rowBuilder: RowBuilderInterface;

  constructor (private data: TravelLetter[]) {
    this.rowBuilder = new RowBuilder(this.settings);
  }

  generate (fileName: string, { start, end }: DateRange): void {
    const sheet: XLSX.CellObject[][] = [];

    SHEET_TITLE_LIST.forEach(title => sheet.push(this.rowBuilder.titleRow(title)));

    this.data.map(item => {
      const travelLetterBuilder = new TravelLetterTemplate(item, this.rowBuilder);
      const rows: XLSX.CellObject[][] = travelLetterBuilder.create();
      rows.forEach(row => sheet.push(row));
    });

    sheet.push(this.rowBuilder.emptyRow());
    sheet.push(this.rowBuilder.textRow('Міністерство охорони здоров\'я України просить посприяти швидкій доставці медикаментів на потреби медзакладів, у тому числі пріоритетний перетин блок-постів'));
    sheet.push(this.rowBuilder.listItemRow('Дійсний з', start));
    sheet.push(this.rowBuilder.listItemRow('Дійсний до', end));
    sheet.push(this.rowBuilder.emptyRow());
    sheet.push(this.rowBuilder.textRow('Міністерство охорони здоров\'я України'));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(sheet);

    ws['!rows'] = this.settings.rows;
    ws['!cols'] = this.settings.cols;
    ws['!merges'] = this.settings.merges;

    XLSX.utils.book_append_sheet(wb, ws);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
