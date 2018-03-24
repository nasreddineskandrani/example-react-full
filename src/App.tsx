import * as React from 'react';
// app
import './App.css';
import { TopMenu } from './top-menu/top-menu';
import { JobPage } from './containers/job.page';
import { MusicPage } from './containers/music.page';
import { Route, Switch } from 'react-router-dom';

const mainStyle = {
  flex: '1',
  display: 'flex',
  'flex-direction': 'column'
} ;

const contentStyle = {
  background: '#eee',
  border: '1px solid black',
  display: 'flex',
  'flex-direction': 'column',
  flex: '1',
};

const Main = () => (
  <main style={mainStyle}>
    <TopMenu />
    <Switch>
      <div style={contentStyle}>
        <Route exact={true} path="/" component={JobPage}/>
        <Route path="/music" component={MusicPage}/>
      </div>
    </Switch>
  </main>
);

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
