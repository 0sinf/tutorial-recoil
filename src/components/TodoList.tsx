import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../stores/todoListState';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

export default function TodoList(): React.ReactElement {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => {
        <TodoItem key={todoItem.id} item={todoItem} />;
      })}
    </>
  );
}
