import ListChild from "./ListChild";

function List() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      detail: "state 사용법 익히기",
    },
    {
      title: "코테 문제 풀기",
      detail: "Lv 0 정복 가즈아",
    },
  ];

  return (
    <div>
      <h1>오늘 해야할일</h1>
      <hr />
      {dataArr.map((el, index) => {
        return (
          <div key={index}>
            <h2>{el.title}</h2>
            <p>{el.detail}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default List;
