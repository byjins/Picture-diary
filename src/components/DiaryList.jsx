import React from 'react';
import styled from 'styled-components';
import DirayItem from './DiaryItem';

const DIRAYS = [
  {
    id: 1,
    image: '',
    text: '오늘 정말 좋은 하루였다.',
    date: '2022-12-01',
  },
  {
    id: 2,
    image: '',
    text: '오늘 정말 좋은 하루였다.',
    date: '2022-12-05',
  },
  {
    id: 3,
    image: '',
    text: '오늘 정말 좋은 하루였다.',
    date: '2022-12-11',
  },
  {
    id: 4,
    image: '',
    text: '오늘 정말 좋은 하루였다.',
    date: '2022-12-18',
  },
];
const DiaryList = () => {
  return (
    <DirayListWrap>
      {DIRAYS.map((item) => (
        <DirayItem key={item.id} diaryList={item} />
      ))}
    </DirayListWrap>
  );
};

export default DiaryList;

const DirayListWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
