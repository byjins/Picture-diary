import React, { useState } from 'react';
import styled from 'styled-components';
import DirayItem from './DiaryItem';
import { useEffect } from 'react';

const DiaryList = () => {
  const [diaryList, setDiaryList] = useState([]);
  const fetchDiaryList = async () => {
    const res = await fetch(
      'https://picture-dairyd-default-rtdb.firebaseio.com/diary.json',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    // { id, image, pickDate, contents, weather }

    let arr = Object.values(data);
    setDiaryList(arr);
  };

  useEffect(() => {
    fetchDiaryList();
  }, []);

  return (
    <main>
      <DirayListWrap>
        {diaryList.map((item) => (
          <DirayItem key={item.id} diaryList={item} />
        ))}
      </DirayListWrap>
    </main>
  );
};

export default DiaryList;

const DirayListWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 3px;
`;
