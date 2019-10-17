import React from 'react';
import { useApp } from '../app';

import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import { Provider } from 'overmind-react';
import { app } from '../app';
import { render } from 'react-dom';
const BasicTodoApp = () => {
  const { state, actions } = useApp();

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <TodoInput />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={() => actions.toggleAllTodos()}
          checked={state.isAllTodosChecked}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList />
      </section>
      <TodoFooter />
    </div>
  );
};

const TodoApp = () => {
  <Provider value={app}>
    <BasicTodoApp />
  </Provider>;
};
const rootElement = document.getElementById('root');

render(
  <Provider value={app}>
    <BasicTodoApp />
  </Provider>,
  rootElement
);

let exportedApp;
exportedApp = BasicTodoApp;

export default exportedApp;
