import { ColInfo, Range, RowInfo } from 'xlsx-js-style'
import { WORKSHEET_COLS, WORKSHEET_ROWS } from '../../../configs/xlsx/xlsxConfig'

export interface WorkSheetSettingsInterface {
  merges: Range[]
  rows: RowInfo[]
  cols: ColInfo[]
  updateRowIndex(): void
  addColMerge(start: number, end: number): void
  addRowMerge(rowspan: number, colIndex: number): void
}

export class WorkSheetSettings implements WorkSheetSettingsInterface {
  private _rowIndex = 0;
  private _merges: Range[] = [];

  get merges (): Range[] {
    return this._merges;
  }

  get rows (): RowInfo[] {
    return WORKSHEET_ROWS;
  }

  get cols (): ColInfo[] {
    return WORKSHEET_COLS;
  }

  updateRowIndex (count?: number): void {
    this._rowIndex += count || 1;
  }

  addColMerge (start: number, end: number): void {
    // s - start, e - end; r - row, c - column
    this._merges.push({
      s: { r: this._rowIndex, c: start },
      e: { r: this._rowIndex, c: end },
    });
  }

  addRowMerge (count: number, colIndex: number): void {
    // s - start, e - end; r - row, c - column
    this._merges.push({
      s: { r: this._rowIndex, c: colIndex },
      e: { r: this._rowIndex + (count - 1), c: colIndex },
    });
  }
}
