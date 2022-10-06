import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoList } from '../stores/todoListFilterState';
import TodoFilters from './TodoFilters';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

export default function TodoList(): React.ReactElement {
  const todoList = useRecoilValue(filteredTodoList);

  return (
    <>
      <TodoFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
