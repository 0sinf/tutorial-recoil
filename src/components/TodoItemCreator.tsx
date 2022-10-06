import React, { ChangeEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../stores/todoListState';

let id = 0;

function getId() {
  return id++;
}

export default function TodoItemCreator(): React.ReactElement {
  const [inputValue, setInputValue] = useState<string>('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((curr) => [
      ...curr,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);

    setInputValue('');
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
