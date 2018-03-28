import { ofType } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, takeUntil } from 'rxjs/operators';
import { PlainAction } from 'redux-typed-actions';
// app
import { Increment, UnloadJobPage } from './job.action';

export const incrementEpic$ = (action$: Observable<PlainAction>, state: {}): Observable<PlainAction> =>
  action$.pipe(
    ofType(Increment.type),
    takeUntil(action$.pipe(ofType(UnloadJobPage.type))),
    switchMap(() => of({type: 'incrementEpic$ done', meta: 'k', error: false, payload: {counter: 1, test: 'h'}})),
  );
