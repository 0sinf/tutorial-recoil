import { ChangeEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState } from '../stores/charCountState';
import { textState } from '../stores/textState';

function TextInput() {
  const [text, setState] = useRecoilState(textState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
