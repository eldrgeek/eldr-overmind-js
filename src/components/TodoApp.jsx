import { CurrentModule, React, useApp } from '../CurrentModule';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import Attribution from './Attribution';
const TodoApp = () => {
  const { state, actions, reaction } = useApp();
  React.useEffect(() => {
    console.log(' second effect');
    return () => {
      console.log('disposing');
    };
  });

  // React.useEffect(() => {
  //   console.log('stilll around');
  //   // const cleaner = reaction(
  //   //   ({ todos }) => state.todos,
  //   //   todos => {
  //   //     console.log('these todos');
  //   //   }
  //   // );
  //   return function cleanup() {
  //     debugger;
  //     // cleaner();
  //     console.log('disposed');
  //   };
  // });
  // const { reaction } = useOvermind()

  // React.useEffect(() => reaction(
  //   (state) => 1,
  //   () => {
  //     console.log("test")
  //   }
  // ))
  const [count, setCount] = React.useState(0);
  const upCount = () => setCount(count + 1);
  return (
    <React.Fragment>
      <section className="todoapp">
        <header className="header">
          <h1>Overmindo</h1>
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
