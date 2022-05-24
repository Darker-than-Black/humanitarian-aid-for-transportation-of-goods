import { get } from 'lodash'
import { STRING } from './configs/string'
import { Driver, Transport } from './type';

export const getPreviewDriver = ({ name, phone }: Driver): string =>
  `${ name || '' } ${ phone ? `(${ phone })` : '' }`.trim();

export const getPreviewTransport = ({ name, type }: Transport): string =>
  `${ type || '' } ${ name ? `(${ name })` : '' }`.trim();

// 2022-03-17 => 17.03.2022
export const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');

    return `${day}.${month}.${date.getFullYear()}`
};

export const arrayToString = (list: string[], data?: Record<string, any>): string =>
    list.map(key => data ? get(data, key) : key)
        .filter(Boolean)
        .join(STRING.DELIMITER.COMMA)

export const isLastIndexOfArray = (arr: any[], i: number): boolean => arr.length - 1 === i

export const deepMap = <R> (list: Record<string, any>[], key: string): R[] =>
    list.map(({ [key]: prop }) => prop).flat()

export const sumListProps = <T extends Record<string, any>> (list: T[], key: string): number => {
    const DEFAULT_COUNT = 0
    return list.reduce((sum, { [key]: prop }) => sum + Number(prop || DEFAULT_COUNT), 0)
}

export const formatLocaleDate = (date: Date): string => new Intl.DateTimeFormat('uk-UA', {
    day: '2-digit', month: '2-digit', year: 'numeric',
}).format(date)

export const copyToClipboard = async (str: string): Promise<void> => {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(str);
    }

    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
