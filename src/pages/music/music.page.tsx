import * as React from 'react';
import { connect } from 'react-redux';
import { PlainAction } from 'redux-typed-actions';
import { Route } from 'react-router-dom';
// app
import { JobState } from '../job/+state/job.reducer';
import { Increment } from '../job/+state/job.action';
import { BandComponent } from './band.component';

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

        <Route path={`/music/:bandName`} component={BandComponent}/>
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