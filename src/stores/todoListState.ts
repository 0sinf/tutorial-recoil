import { atom } from 'recoil';

export type TodoItemType = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<Array<TodoItemType>>({
  key: 'TodoList',
  default: [],
});
