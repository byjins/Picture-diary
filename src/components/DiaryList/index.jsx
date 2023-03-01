import React, { useState } from 'react';
import DirayItem from '../DiaryItem';
import { useEffect } from 'react';
import { DirayListWrap, NoDiaryData } from './style';

const DiaryList = ({ indexDate }) => {
  const [diaryList, setDiaryList] = useState([]);
  const fetchDiaryList = async () => {};

  useEffect(() => {
    fetchDiaryList();
  }, [diaryList]);

  return (
    <main>
      <DirayListWrap>
        {!diaryList && <NoDiaryData>작성한 일기가 없습니다!</NoDiaryData>}
        {diaryList &&
          diaryList.map((item) => <DirayItem key={item.id} diaryList={item} />)}
      </DirayListWrap>
    </main>
  );
};

export default DiaryList;
