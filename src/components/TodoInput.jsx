import { CurrentModule, React, useApp } from '../CurrentModule';

const TodoInput = () => {
  const { state, actions } = useApp();
  return (
    <input
      className="new-todo"
      placeholder="What do you need to be done?"
      value={state.newTodoTitle}
      onChange={event => actions.changeNewTodoTitle(event.currentTarget.value)}
      onKeyDown={event => {
        if (event.keyCode !== 13) return;
        actions.addTodo();
      }}
      autoFocus={true}
    />
  );
};

export default TodoInput;

CurrentModule(TodoInput);
