import { createHook } from 'overmind-react';
import { state } from './state';
import { onInitialize } from './onInitialize';
import * as actions from './actions';
import * as effects from './effects';
import { createOvermind } from 'overmind';

export let useApp;
export let app;

const config = {
  onInitialize,
  state,
  actions,
  effects,
};

if (module.hot) {
  module.hot.dispose(data => {
    data.app = app;
    data.useApp = useApp;
  });

  if (!module.hot.data) {
    app = createOvermind(config, {
      devtools: 'localhost:8080',
    });
    useApp = createHook();
  } else {
    app = module.hot.data.app;
    useApp = module.hot.data.useApp;
  }
}
