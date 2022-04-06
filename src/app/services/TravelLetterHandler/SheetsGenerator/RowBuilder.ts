import { CellObject } from 'xlsx-js-style'
import { CellBuilder } from './CellBuilder'
import { SenderRecipient } from '../../../type'
import { WorkSheetSettings } from './WorkSheetSettings'
import { DETAILS_KEYS } from '../../../configs/xlsx/xlsxConfig'
import { RecipientsTotalFields } from '../RecipientsTotalFields'
import { arrayToString, isLastIndexOfArray } from '../../../utils'
import { ALIGNMENT_HORIZONTAL, FONT_SIZES } from '../../../configs/xlsx/xlsxFormatConstants'

export interface RowBuilderInterface {
  emptyRow(): []
  titleRow(t: string): CellObject[]
  listItemRow (h: string, c: string): CellObject[]
  tableHeader (l: string[]): CellObject[]
  textRow (text: string): CellObject[]
  tableRecipientRows (i: SenderRecipient, startIndex: number): CellObject[][]
  tableTotalRow(i: SenderRecipient[]): CellObject[]
}

export class RowBuilder implements RowBuilderInterface {
  private readonly cellBuilder = new CellBuilder();

  constructor (private sheetSettings: WorkSheetSettings) {}

  emptyRow (): [] {
    this.sheetSettings.updateRowIndex();
    return [];
  }

  titleRow (text: string): CellObject[] {
    this.sheetSettings.addColMerge(1, 3);
    this.sheetSettings.updateRowIndex();

    return [
      this.cellBuilder.emptyCell(),
      this.cellBuilder.textCell(text, {
        size: FONT_SIZES.EXTRA_LARGE,
        horizontal: ALIGNMENT_HORIZONTAL.CENTER,
      }),
    ]
  }

  textRow (text: string): CellObject[] {
    this.sheetSettings.addColMerge(1, 5);
    this.sheetSettings.updateRowIndex();

    return [
      this.cellBuilder.emptyCell(),
      this.cellBuilder.textCell(text),
    ];
  }

  listItemRow (header: string, content: string): CellObject[] {
    this.sheetSettings.addColMerge(2, 5);
    this.sheetSettings.updateRowIndex();

    return [
      this.cellBuilder.emptyCell(),
      this.cellBuilder.textCell(header, { bold: true }),
      this.cellBuilder.textCell(content, { bold: true }),
    ];
  }

  tableHeader (list: string[]): CellObject[] {
    this.sheetSettings.updateRowIndex();

    return list.map((label, index) => this.cellBuilder.textCell(label, {
      bold: true,
      horizontal: ALIGNMENT_HORIZONTAL.CENTER,
      border: {
        left: !index,
        top: true,
        bottom: true,
        right: index === list.length - 1,
      },
    }));
  }

  tableRecipientRows ({ details, batches }: SenderRecipient, startIndex: number): CellObject[][] {
    const itemsCount: number = batches.reduce((sum, { items }) => sum + items.length, 0);
    this.sheetSettings.addRowMerge(itemsCount, 5);

    return batches.map(({ volume, weight, items }, index) => {
      const isLastBatch = isLastIndexOfArray(batches, index);

      this.sheetSettings.addRowMerge(items.length, 3);
      this.sheetSettings.addRowMerge(items.length, 4);
      this.sheetSettings.updateRowIndex(items.length);

      return items.map(({ quantity, name }, i2) => {
        const isLastItem = isLastIndexOfArray(items, i2);
        const isLast = isLastBatch && isLastItem;

        return [
          this.cellBuilder.textCell(++startIndex, {
            horizontal: ALIGNMENT_HORIZONTAL.CENTER,
            border: { bottom: isLast, left: true },
          }),
          this.cellBuilder.textCell(name, {
            border: { bottom: isLast },
          }),
          this.cellBuilder.textCell(quantity, {
            horizontal: ALIGNMENT_HORIZONTAL.CENTER,
            border: { bottom: isLast },
          }),
          this.cellBuilder.textCell(volume, {
            horizontal: ALIGNMENT_HORIZONTAL.CENTER,
            border: { bottom: isLast },
          }),
          this.cellBuilder.textCell(weight, {
            horizontal: ALIGNMENT_HORIZONTAL.CENTER,
            border: { bottom: isLast },
          }),
          this.cellBuilder.textCell(arrayToString(DETAILS_KEYS, details), {
            horizontal: ALIGNMENT_HORIZONTAL.CENTER,
            border: { bottom: isLast, right: true },
          }),
        ];
      });
    }).flat();
  }

  tableTotalRow (list: SenderRecipient[]): CellObject[] {
    this.sheetSettings.updateRowIndex();
    const { quantity, weight, volume } = new RecipientsTotalFields(list);

    return [
      this.cellBuilder.emptyCell({ border: { bottom: true, left: true } }),
      this.cellBuilder.textCell('Total', { bold: true, border: { bottom: true } }),
      this.cellBuilder.textCell(quantity, {
        bold: true,
        horizontal: ALIGNMENT_HORIZONTAL.CENTER,
        border: { bottom: true },
      }),
      this.cellBuilder.textCell(volume, {
        bold: true,
        horizontal: ALIGNMENT_HORIZONTAL.CENTER,
        border: { bottom: true },
      }),
      this.cellBuilder.textCell(weight, {
        bold: true,
        horizontal: ALIGNMENT_HORIZONTAL.CENTER,
        border: { bottom: true },
      }),
      this.cellBuilder.emptyCell({ border: { bottom: true, right: true } }),
    ];
  }
}
