import React from 'react';
import { useApp } from '../app';

import TodoItem from './TodoItem';
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
        <input
          className="new-todo"
          placeholder="What do you need to be done?"
          value={state.newTodoTitle}
          onChange={event =>
            actions.changeNewTodoTitle(event.currentTarget.value)
          }
          onKeyDown={event => {
            if (event.keyCode !== 13) return;
            actions.addTodo();
          }}
          autoFocus={true}
        />
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
        <ul className="todo-list">
          {state.currentTodos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                isEditing={state.editingTodoId === todo.id}
              />
            );
          })}
        </ul>
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
