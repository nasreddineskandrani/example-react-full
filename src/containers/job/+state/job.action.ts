import { Action } from '../../../store'; // TODO fix with absolute path

export const INCREMENT =  '[job] increment';
export const DECREMENT =  '[job] decrement';

export class Increment implements Action {
    public type = INCREMENT;

    public static create() {
        return Object.assign({}, new Increment({counter: 1, test : 'test'}));
    }
    // tslint:disable-next-line:no-empty
    constructor(payload: {counter: number, test: string}) {}
}

export class Decrement implements Action {
    public type = DECREMENT;

    // tslint:disable-next-line:no-empty
    constructor() {}
}

export type Actions =
    Increment |
    Decrement;