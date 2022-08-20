import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store, { persistor } from './services/store';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}
