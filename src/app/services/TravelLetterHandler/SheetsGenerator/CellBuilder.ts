import { CellObject } from 'xlsx-js-style'
import { STRING } from '../../../configs/string'
import { FONTS, DEFAULT_CELL_STYLE, CELL_TYPE_STRING, BORDER_STYLE } from '../../../configs/xlsx/xlsxFormatConstants'

export interface CellStyles {
  size?: number,
  bold?: boolean,
  horizontal?: string,
  border?: {
    top?: boolean,
    bottom?: boolean,
    left?: boolean,
    right?: boolean,
  },
}

export interface CellBuilderInterface {
  emptyCell(): CellObject
  textCell(v: string, style?: CellStyles): CellObject
  linkCell(v: string, link: string, style?: CellStyles): CellObject
}

export class CellBuilder implements CellBuilderInterface {
  emptyCell (style?: CellStyles): CellObject {
    return { v: '', ...this.getStyles(style) };
  }

  textCell (v?: string | number, style?: CellStyles): CellObject {
    return { v: v || STRING.HYPHEN, ...this.getStyles(style) };
  }

  linkCell (v?: string, link?: string, style?: CellStyles): CellObject {
    return { v: v || STRING.HYPHEN, l: { Target: link || STRING.EMPTY }, ...this.getStyles(style) };
  }

  private getStyles (style?: CellStyles): CellObject {
    const { size, bold, horizontal, border } = { ...DEFAULT_CELL_STYLE, ...style };

    return {
      t: CELL_TYPE_STRING,
      s: {
        font: {
          bold,
          sz: size,
          name: FONTS.CALIBRI,
        },
        alignment: {
          horizontal,
          wrapText: true,
          vertical: 'top'
        },
        border: {
          top: border.top ? BORDER_STYLE : null,
          bottom: border.bottom ? BORDER_STYLE : null,
          left: border.left ? BORDER_STYLE : null,
          right: border.right ? BORDER_STYLE : null,
        },
      },
    };
  }
}
