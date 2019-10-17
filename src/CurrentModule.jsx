import React from 'react';
import { render } from 'react-dom';
import { app } from './app';
import { Provider } from 'overmind-react';
import { useApp } from './app';
const CurrentModule = Element => {
  const rootElement = document.getElementById('root');
  render(
    <Provider value={app}>
      <Element />
    </Provider>,
    rootElement
  );
};

export { CurrentModule, React, useApp };
export default CurrentModule;
