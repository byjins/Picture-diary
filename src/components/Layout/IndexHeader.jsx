import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TbArrowBigRight, TbArrowBigLeft } from 'react-icons/tb';
import IndexNav from './IndexNav';
import HeaderWrap from './HeaderWrap';

const IndexHeader = ({ setPickDate }) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const currentDate = `${year}년 ${month}월`;

  // 초기 로딩 시 날짜 만들어주기
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
  }, []);

  useEffect(() => {
    setPickDate(`${year}-${month}`);
  }, [year, month, setPickDate]);

  // 이전 달 클릭 시 1월달이라면 년도에서 -1
  const onClickPrevMonth = () => {
    if (month === 1) {
      setYear((prev) => prev - 1);
      setMonth(12);
      return;
    }
    setMonth((prev) => prev - 1);
  };

  // 다음 달 클릭 시 12월달이라면 년도에서 +1
  const onClickNextMonth = () => {
    if (month >= 12) {
      setYear((prev) => prev + 1);
      setMonth(1);
      return;
    }
    setMonth((prev) => prev + 1);
  };

  return (
    <>
      <HeaderWrap>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <ArrowButton onClick={onClickPrevMonth}>
            <TbArrowBigLeft style={{ fontSize: 18 }} />
          </ArrowButton>
          <CurrentDate>{currentDate}</CurrentDate>
          <ArrowButton onClick={onClickNextMonth}>
            <TbArrowBigRight style={{ fontSize: 18 }} />
          </ArrowButton>
        </div>
        <IndexNav />
      </HeaderWrap>
    </>
  );
};

export default IndexHeader;

const CurrentDate = styled.span`
  font-size: 24px;
  font-family: 'GangwonEdu_OTFBoldA';
`;

const ArrowButton = styled.button`
  background: #f1f1f1;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px grey;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #c4c4c4;
  }
`;
