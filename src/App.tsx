import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
// app
import './App.css';
import { TopMenu } from './top-menu/top-menu';
import { JobPage } from './containers/job/job.page';
import { MusicPage } from './containers/music.page';

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
        <Route exact={true} path="/" component={JobPage}/>
        <Route path="/music" component={MusicPage}/>
      </Switch>
    </div>
  </main>
);

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
