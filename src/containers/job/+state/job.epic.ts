import { ofType } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators';
import { PlainAction } from 'redux-typed-actions';
// app
import { Increment } from './job.action';

export const incrementEpic$ = (action$: Observable<PlainAction>, state: {}) =>
  action$.pipe(
    ofType(Increment.type),
    switchMap(() => of({type: 'incrementWOUHA', meta: 'k', error: false, payload: {counter: 1, test: 'h'}})),
  );
