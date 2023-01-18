import { useDispatch, useSelector } from 'react-redux';
import { done } from '../modules/todo';

export default function DoneList() {
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true
  );
  const dispatch = useDispatch();
  return (
    <section>
      <h1>완료된 목록</h1>
      <ul>
        {list.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </section>
  );
}
