import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// app
import App from './_app';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { store } from './store';

ReactDOM.render(
  (
    // ROUTING Link
    // https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
    <Provider store={store}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root'));
registerServiceWorker();
