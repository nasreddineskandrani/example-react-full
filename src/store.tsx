import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// app
import { reducer as jobReducer } from './containers/job/+state/job.reducer';

const appReducer = combineReducers({
    job: jobReducer,
});

const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
});

const enhancer = composeEnhancers(
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

export const store = createStore(appReducer, enhancer);
