import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './styles/main.css';

// Entry point of the application - renders the app into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider makes Redux store available to all components */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
