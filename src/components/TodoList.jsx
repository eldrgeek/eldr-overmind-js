import React from 'react';
import classNames from 'classnames';
import { useApp } from '../app';
import CurrentModule from '../CurrentModule';
import TodoItem from './TodoItem';
const TodoList = () => {
  const { state, actions } = useApp();
  return (
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
  );
};

export default TodoList;

CurrentModule(TodoList);
