import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
