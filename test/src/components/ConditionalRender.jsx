import { useState } from 'react';
import Item from './Item';

function ConditionalRender() {
  const [condition, setCondition] = useState('보이기');
  const onChange = () => {
    condition === '보이기' ? setCondition('감추기') : setCondition('보이기');
  };
  return (
    <div className="App">
            {condition === '감추기' && <Item />}
      <button onClick={onChange}>{condition}</button>
    </div>
  );
}
export default ConditionalRender;
