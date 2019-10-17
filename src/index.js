import { Provider } from 'overmind-react';
import * as React from 'react';
import { render } from 'react-dom';
import { app } from './app';
import TodoApp from './components/TodoApp';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const rootElement = document.getElementById('root');

render(
  <Provider value={app}>
    <TodoApp />
  </Provider>,
  rootElement
);
