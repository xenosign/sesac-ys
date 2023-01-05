import React, { useState } from "react";
export default function ChangeObj(props) {
  const [index, changeIndex] = useState(0);
  let data = props.objArr[index];
  const changeProfile = () => {
    if (index === props.objArr.length - 1) {
      changeIndex(0);
    } else {
      changeIndex(index + 1);
    }
    data = props.objArr[index];
  };
  return (
    <div>
      <h1>이름 : {data.name}</h1>
      <h1>나이 : {data.age}</h1>
      <h1>별명 : {data.nickName}</h1>
      <button onClick={changeProfile}>프로필 변경하기</button>
    </div>
  );
}
