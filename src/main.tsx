import store from './store';
import App from './app/App';

import { Provider } from 'react-redux/es/exports';
import ReactDOM from 'react-dom/client';

import React from 'react';
import './app/index.css';

// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
