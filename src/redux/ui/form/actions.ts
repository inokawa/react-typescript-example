import { SET_ON, SET_OFF } from './types';

export const setOn = () => ({ type: SET_ON, payload: { data: true } });
export const setOff = () => ({ type: SET_OFF, payload: { data: false } });

export type Actions = ReturnType<typeof setOn | typeof setOff>;
