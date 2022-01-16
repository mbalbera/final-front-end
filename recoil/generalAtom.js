import { atom } from 'recoil'

export const theme = atom({
    key: 'darkmode',
    default: false,
});

export const microModeState = atom({
    key: 'microModeState',
    default: true,
});