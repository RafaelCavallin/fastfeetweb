import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes history={history} />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
