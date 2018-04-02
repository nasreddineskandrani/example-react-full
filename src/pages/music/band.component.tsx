import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface BandProps extends RouteComponentProps<{bandName: string}> {
}

export class BandComponent extends React.Component<BandProps, {}> {
  render() {
    return (
      <div>
        {this.props.match.params.bandName}
      </div>
    );
  }
}