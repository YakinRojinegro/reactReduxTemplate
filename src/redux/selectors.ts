import { RootState } from './store';

export const fooSelector = (state: RootState) => state.fooProperties.fooState;
export const barSelector = (state: RootState) => state.fooProperties.barState;