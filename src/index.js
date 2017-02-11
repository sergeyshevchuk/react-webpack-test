import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './AppComponent';

import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(AppComponent);

if (module.hot) {
  module.hot.accept('./AppComponent', () => {
    render(AppComponent)
  });
}