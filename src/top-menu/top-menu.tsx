
import * as React from 'react';
import { Link } from 'react-router-dom';

const stylePadding = {
  paddingRight: 20
};

export class TopMenu extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/`} style={stylePadding}>Job Page</Link>
        <Link to={`/music`}>Music Page</Link>
      </div>
    );
  }
}
  