// app
import * as JobActions from './job.action';

type JobReducerActions = JobActions.Actions;

export interface JobState {
    counter: number;
}

const initialState = {
    counter: 0
};

export function reducer(state: JobState = initialState, action: JobReducerActions) {
    switch (action.type) {
        case JobActions.INCREMENT:
            return {...state, counter: state.counter + 1};
        case JobActions.DECREMENT:
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
}