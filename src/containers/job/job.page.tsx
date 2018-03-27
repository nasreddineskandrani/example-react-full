import * as React from 'react';
import { connect } from 'react-redux';
import { PlainAction } from 'redux-typed-actions';
// app
import { JobState } from './+state/job.reducer';
import { Increment } from './+state/job.action';
import { incrementEpic$ } from './+state/job.epic';
import { epics$ } from '../../store'; // TODO fix use absolute

const mapStateToProps = (state: JobState) => {
  return {
    count: state.counter
  };
};

const mapDispatchToProps = (dispatch: (action: PlainAction) => void) => {
  return {
    onIncrement: () => dispatch(Increment.get()),
  };
};

export interface JobPageProps {
  dispatch: (action: PlainAction) => void;
  count: number;
  onIncrement: () => void;
}

export class JobPage extends React.Component<JobPageProps, {}> {

  componentDidMount() {
    epics$.next(incrementEpic$);
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