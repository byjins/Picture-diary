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
  {
    id: 5,
    image: '',
    text: '오늘 정말 좋은 하루였다.',
    date: '2022-12-18',
  },
  {
    id: 6,
    image: '',
    text: '오늘 정말 좋은 하루였다.',
    date: '2022-12-18',
  },
  {
    id: 7,
    image: '',
    text: '오늘 정말 좋은 하루였다.',
    date: '2022-12-18',
  },
  {
    id: 8,
    image: '',
    text: '오늘 정말 좋은 하루였다.',
    date: '2022-12-18',
  },
  {
    id: 9,
    image: '',
    text: '오늘 정말 좋은 하루였다.',
    date: '2022-12-18',
  },
  {
    id: 10,
    image: '',
    text: '오늘 정말 좋은 하루였다.',
    date: '2022-12-18',
  },
];
const DiaryList = () => {
  return (
    <main>
      <DirayListWrap>
        {DIRAYS.map((item) => (
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
