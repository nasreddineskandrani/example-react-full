import * as React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
// app
import './app.css';
import { TopMenu } from './top-menu/top-menu';
import { asyncComponent } from './async-component';
import { history } from './store';

const jobPage = asyncComponent(() =>
  import('./pages/job/job.page').then(module => module.default)
);

const musicPage = asyncComponent(() =>
  import('./pages/music/music.page').then(module => module.default)
);

const mainStyle: React.CSSProperties = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column'
};

const contentStyle: React.CSSProperties = {
  background: '#eee',
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  flex: '1'
};

const Main = () => (
  <main style={mainStyle}>
    <TopMenu />
    <div style={contentStyle}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact={true} path="/" component={jobPage} />
          <Route path="/job" component={jobPage} />
          <Route path="/music" component={musicPage} />
        </div>
      </ConnectedRouter>
    </div>
  </main>
);

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Main />
      </div>
    );
  }
}

export default App;
