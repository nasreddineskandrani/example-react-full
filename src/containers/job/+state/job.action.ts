import { Action } from '../../../store'; // TODO fix with absolute path

export const INCREMENT =  '[job] increment';
export const DECREMENT =  '[job] decrement';

export class Increment implements Action {
    public type = INCREMENT;

    // tslint:disable-next-line:no-empty
    constructor(public payload: number) {}
}

export class Decrement implements Action {
    public type = DECREMENT;

    // tslint:disable-next-line:no-empty
    constructor(public payload: number) {}
}

export type Actions =
    Increment |
    Decrement;