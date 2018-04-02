import { applyMiddleware, createStore, ReducersMapObject, combineReducers, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, ofType } from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap } from 'rxjs/operators';
import { defineAction, PlainAction } from 'redux-typed-actions';
import { of } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators';

import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export const history = createHistory();

export const idleAction = defineAction<{counter: number, test: string}>('[App] idle action');

const idleEpic$ = (action$: Observable<PlainAction>, state: {}) =>
  action$.pipe(
    ofType(idleAction.type),
    map((action: PlainAction) => idleAction.cast(action)),
    switchMap(() => of({type: 'idleEpic$ done', meta: 'k', error: false, payload: {counter: 1, test: 'h'}})),
  );

export const epics$ = new BehaviorSubject(idleEpic$);
export const rootEpic =
    (action$: Observable<PlainAction>, state: {}) => {
       return epics$.pipe(
           mergeMap(epic => epic(action$, state))
        );
    };

class AppState {
    version: number;
}

const initialAppState = {
    version: 1
};

const appStateReducer = (state: AppState = initialAppState, action: PlainAction) => {
    return state;
};

let mapReducers: ReducersMapObject = {
    router: routerReducer
};

// tslint:disable-next-line:no-any
function createReducer(item: {name: string, reducer: any}) {
    mapReducers = {
        ...mapReducers,
        [item.name]: item.reducer,
    };
    return combineReducers(mapReducers);
}

export function injectAsyncReducer<T>(
    _store: Store<{}>, 
    _name: string,
    asyncReducer: (state: T, action: PlainAction) => T) {
    _store.replaceReducer(createReducer({name: _name, reducer: asyncReducer}));
}

export function removeAsyncReducer(_store: Store<{}>, _name: string) {
    mapReducers[_name] = (x) => { return null; };
    _store.replaceReducer(combineReducers(mapReducers));
}

// lazyloading reducers vs devtool
// https://github.com/gaearon/redux-devtools/issues/304
const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
    shouldHotReload: false
});

const middlewares = [
    createEpicMiddleware(rootEpic),
    routerMiddleware(history)
];

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

export const store = createStore(createReducer({name: 'app', reducer: appStateReducer}), enhancer);