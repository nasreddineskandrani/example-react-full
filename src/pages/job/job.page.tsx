import * as React from 'react';
import { connect } from 'react-redux';
import { PlainAction } from 'redux-typed-actions';
// app
import { JobState } from './+state/job.reducer';
import { reducer as JobReducer } from './+state/job.reducer';
import { Increment, UnloadJobPage } from './+state/job.action';
import { incrementEpic$ } from './+state/job.epic';
import { epics$ } from '../../store'; // TODO fix use absolute
import { removeAsyncReducer, injectAsyncReducer, store } from '../../store'; // TODO fix use absolute

const storeKeyJobPage = 'async_job';

const mapStateToProps = (state: JobState) => {
  return {
    count: state.counter
  };
};

const mapDispatchToProps = (dispatch: (action: PlainAction) => void) => {
  return {
    onIncrement: () => dispatch(Increment.get()),
    unloadPage: () => dispatch(UnloadJobPage.get()),
  };
};

export interface JobPageProps {
  dispatch: (action: PlainAction) => void;
  count: number;
  onIncrement: () => void;
  unloadPage: () => void;
}

export class JobPage extends React.Component<JobPageProps, {}> {

  componentDidMount() {
    injectAsyncReducer(store, storeKeyJobPage, JobReducer);
    epics$.next(incrementEpic$);
  }

  componentWillUnmount() {
    removeAsyncReducer(store, storeKeyJobPage);
    this.props.unloadPage();
  }

  render() {
    return (
      <div>
        <h1>I am the Job Page</h1>
        <button type="button" onClick={this.props.onIncrement}>
          {`Increment`}
        </button>
      </div>
    );
  }
}

export const JobPageConnected =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobPage);

export default JobPageConnected;