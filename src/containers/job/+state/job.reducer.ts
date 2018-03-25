import { PlainAction } from 'redux-typed-actions';
// app
import { Increment } from './job.action';

export interface JobState {
    counter: number;
}

const initialState = {
    counter: 0
};

export function reducer(state: JobState = initialState, action: PlainAction) {
    if (Increment.is(action)) {
        return {...state, counter: state.counter + 1};
    } else {
        return state;
    }
}