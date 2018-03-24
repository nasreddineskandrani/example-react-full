
import * as React from 'react';
import { Link } from 'react-router-dom';

export class TopMenu extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/`}>Job</Link>
        <Link to={`/music`}>Music</Link>
      </div>
    );
  }
}
  