import { AppState } from '../types';

export const getData = (state: AppState): string => state.sample.data;
