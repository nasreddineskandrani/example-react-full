import { defineAction } from 'redux-typed-actions';

export const Increment = defineAction<{counter: number, test: string}>('[job] increment');