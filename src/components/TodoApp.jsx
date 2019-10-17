import { CurrentModule, React, useApp } from '../CurrentModule';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import Attribution from './Attribution';
const TodoApp = () => {
  const { state, actions } = useApp();

  return (
    <React.Fragment>
      <section className="todoapp">
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
      </section>
      <Attribution />
    </React.Fragment>
  );
};

export default TodoApp;
CurrentModule(TodoApp);
