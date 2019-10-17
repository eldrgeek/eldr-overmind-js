import { CurrentModule, React, useApp } from '../CurrentModule';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';

const TodoApp = () => {
  const { state, actions } = useApp();

  return (
    <div>
      <header className="header">
        <h1>todos!</h1>
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

export default TodoApp;
// CurrentModule(TodoApp);
