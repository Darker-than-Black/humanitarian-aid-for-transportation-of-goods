export const FONTS = {
  TIMES: 'Times New Roman',
  CALIBRI: 'Calibri',
}

export const FONT_SIZES = {
  SMALL: 11,
  MEDIUM: 14,
  LARGE: 16,
  EXTRA_LARGE: 20
}

export const ALIGNMENT_HORIZONTAL = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
}

export const CELL_TYPE_STRING = 's'

export const DEFAULT_CELL_STYLE = {
  horizontal: ALIGNMENT_HORIZONTAL.LEFT,
  size: FONT_SIZES.SMALL,
  bold: false,
  border: {
    top: false,
    bottom: false,
    left: false,
    right: false,
  },
}

export const BORDER_STYLE = {
  style: 'medium',
  color: {
    rgb: '000000'
  }
}
