function CustomList(props) {
  return (
    <ul>
      {props.arr?.map((el) => {
        return <li>{el}</li>;
      })}
    </ul>
  );
}
export default CustomList;
