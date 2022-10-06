import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { TodoItemType, todoListState } from '../stores/todoListState';

function replaceItemAtIndex(
  arr: TodoItemType[],
  index: number,
  newValue: TodoItemType
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: TodoItemType[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default function TodoItem({
  item,
}: {
  item: TodoItemType;
}): React.ReactElement {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const idx = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, idx, { ...item, text: value });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, idx, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, idx);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}
