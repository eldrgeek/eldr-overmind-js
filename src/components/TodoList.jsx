import { CurrentModule, React, useApp } from '../CurrentModule';
import TodoItem from './TodoItem';
const TodoList = () => {
  const { state } = useApp();
  return (
    <ul className="todo-list">
      {state.currentTodos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;

// CurrentModule(TodoList);
