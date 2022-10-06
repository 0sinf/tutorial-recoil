import { atom, selector } from 'recoil';
import { todoListState } from './todoListState';

export const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'Show All',
});

export const filteredTodoList = selector({
  key: 'FilteredTodoList',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
