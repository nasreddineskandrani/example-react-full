
import * as React from 'react';
// import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
// app
import { store } from '../store';

const stylePadding = {
  paddingRight: 20
};

export class TopMenu extends React.Component {

  handleOnClickToJob = () => {
    store.dispatch(push('/job'));
  }

  handleOnClickToMusic = () => {
    store.dispatch(push('/music'));
  }

  handleOnClickToMusicBand = () => {
    store.dispatch(push('/music/metallica'));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClickToJob} style={stylePadding}>Job Page</button>
        <button onClick={this.handleOnClickToMusic} style={stylePadding}>Music Page</button>
        <button onClick={this.handleOnClickToMusicBand} style={stylePadding}>Music Page With Band</button>
      </div>
    );
  }
}
  