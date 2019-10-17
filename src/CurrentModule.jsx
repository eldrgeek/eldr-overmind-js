import React from 'react';
import { render } from 'react-dom';
import { app } from './app';
import { Provider } from 'overmind-react';
const currentModule = Element => {
  const rootElement = document.getElementById('root');
  render(
    <Provider value={app}>
      <Element />
    </Provider>,
    rootElement
  );
};

export default currentModule;
