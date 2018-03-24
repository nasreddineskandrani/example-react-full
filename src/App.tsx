import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
// app
import './app.css';
import { TopMenu } from './top-menu/top-menu';
import { asyncComponent } from './async-component';

const jobPage = asyncComponent(() =>
    import('./containers/job/job.page').then(module => module.default)
);

const musicPage = asyncComponent(() =>
    import('./containers/music.page').then(module => module.default)
);

const mainStyle: React.CSSProperties = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column'
} ;

const contentStyle: React.CSSProperties = {
  background: '#eee',
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
};

const Main = () => (
  <main style={mainStyle}>
    <TopMenu />
    <div style={contentStyle}>
      <Switch>
        <Route exact={true} path="/" component={jobPage}/>
        <Route path="/music" component={musicPage}/>
      </Switch>
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
