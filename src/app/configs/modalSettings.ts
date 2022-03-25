import { MODAL_TYPES } from './modalTypes';
import { ModalSettings } from '../type';

export const DEFAULT_MODAL_SETTINGS: ModalSettings = {
    modal: true,
    maximizable: true,
    style: {
        width: '50vw'
    },
    breakpoints: {
        '960px': '75vw',
        '640px': '97vw',
    },
};

export const ITEMS_MODAL_SETTINGS: ModalSettings = {
    modal: true,
    maximizable: true,
    style: {
        width: '50vw'
    },
    breakpoints: {
        '960px': '97vw',
    },
};

export const ADDITION_MODAL_SETTINGS: ModalSettings = {
    modal: true,
    maximizable: true,
    style: {
        width: '70vw'
    },
    breakpoints: {
        '960px': '97vw',
    },
};

export const modalSettingsDictionary = new Map<string, ModalSettings>()
    .set(MODAL_TYPES.ITEMS, ITEMS_MODAL_SETTINGS)
    .set(MODAL_TYPES.ADDITION, ADDITION_MODAL_SETTINGS);