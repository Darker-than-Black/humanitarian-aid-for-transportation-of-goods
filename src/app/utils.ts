import { Driver, Transport } from './type';

export const getPreviewDriver = ({ name, phone }: Driver): string =>
  `${ name || '' } ${ phone ? `(${ phone })` : '' }`.trim();

export const getPreviewTransport = ({ name, type }: Transport): string =>
  `${ type || '' } ${ name ? `(${ name })` : '' }`.trim();
