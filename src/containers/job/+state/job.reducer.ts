// app
import * as JobActions from './job.action';

type JobReducerActions = JobActions.Actions;

export function reducer(state: number = 0, action: JobReducerActions) {
    switch (action.type) {
        case JobActions.INCREMENT:
            return state + 1;
        case JobActions.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}