import { CellObject } from 'xlsx-js-style'
import { STRING } from '../../../configs/string';
import { RowBuilderInterface } from './RowBuilder'
import { Details, Sender, TravelLetter } from '../../../type'
import { arrayToString, getPreviewDriver } from '../../../utils'
import { RecipientsTotalFields } from '../RecipientsTotalFields'
import { DETAILS_KEYS, TABLE_HEADER_KEYS } from '../../../configs/xlsx/xlsxConfig'

export class TravelLetterTemplate {
  private rows: CellObject[][] = [];

  constructor (private item: TravelLetter, private rowBuilder: RowBuilderInterface) {}

  private get driversList (): string[] {
    return this.item.drivers.map(driver => getPreviewDriver(driver));
  }

  private get travelLetterName (): string {
    const { details: {num = STRING.EMPTY} } = this.item;
    return arrayToString([num, ...this.driversList]);
  }

  create (): CellObject[][] {
    this.pushRow(this.rowBuilder.emptyRow())
      .pushRow(this.rowBuilder.listItemRow('Товаро-транспортна накладна для а/м No.', this.travelLetterName))
      .setSenders();

    return this.rows;
  }

  private setSenders (): TravelLetterTemplate {
    this.item.senders.map(({ details, recipients }: Sender) => {
      this.pushRow(this.rowBuilder.emptyRow())
        .pushRow(this.rowBuilder.listItemRow('Адреса завантаження:', this.getDetails(details)))
        .pushRow(this.rowBuilder.listItemRow('Контакт від МОЗ:', 'Молдован Володимир +380 50 710 7071'))
        .pushRow(this.rowBuilder.tableHeader(TABLE_HEADER_KEYS));

      recipients.forEach((recipient, index) => {
        const addedRecipients = recipients.filter((el, i2) => i2 < index);
        const { itemsCount: startIndex } = new RecipientsTotalFields(addedRecipients);

        const items = this.rowBuilder.tableRecipientRows(recipient, startIndex);
        items.forEach(item => this.pushRow(item));
      });

      this.pushRow(this.rowBuilder.tableTotalRow(recipients));
    });

    return this;
  }

  private getDetails (d: Details): string {
    return arrayToString(DETAILS_KEYS, d);
  }

  private pushRow (row: CellObject[]): TravelLetterTemplate {
    this.rows.push(row);
    return this;
  }
}
