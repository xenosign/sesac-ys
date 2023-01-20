import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (resFetch.status !== 200) return alert('통신 에러');

    const data = await resFetch.json();
    setDataArr(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
           {' '}
      {dataArr.map((el) => {
        return (
          <ProfileComponent
            key={el.name}
            name={el.name}
            age={el.age}
            nickName={el.nickName}
          />
        );
      })}
    </>
  );
}
