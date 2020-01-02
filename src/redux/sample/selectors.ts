import { AppState } from '../types';
import { createSelector } from 'reselect';

export const getSample = (state: AppState) => state.sample;

export const getData = createSelector(
  getSample,
  (sample): string => sample.data
);
