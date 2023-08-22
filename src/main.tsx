import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/index.css';
import { Provider } from 'react-redux/es/exports';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
