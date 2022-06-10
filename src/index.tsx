import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GlobalStyle, theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <App/>
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
