import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function GetDataFromAPI() {
  const [dataObj, setDataObj] = useState({});

  async function fetchData() {
    // const resFetch = await fetch(`/api/mongo/count`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // });

    const res = await axios.get('/api');

    if (res.status !== 200) return alert('통신 에러');

    const data = await res.json();
    setDataObj(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
}
