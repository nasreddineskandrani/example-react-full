import * as React from 'react';
import { connect } from 'react-redux';
import { PlainAction } from 'redux-typed-actions';
// app
import { JobState } from './job/+state/job.reducer';
import { Increment } from './job/+state/job.action';

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

export interface MusicPageProps {
  dispatch: (action: PlainAction) => void;
  count: number;
  onIncrement: () => void;
}

export class MusicPage extends React.Component<MusicPageProps, {}> {
  render() {
    return (
      <div>
        <h1>I am the Music Page</h1>
        <button type="button" onClick={this.props.onIncrement}>
          {`Increment`}
        </button>
      </div>
    );
  }
}

export const MusicPageConnected =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MusicPage);

export default MusicPageConnected;