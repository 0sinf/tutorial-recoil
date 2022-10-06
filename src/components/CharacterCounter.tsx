import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
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

export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
    </div>
  );
}
