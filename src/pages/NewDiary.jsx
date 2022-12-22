import React from 'react';
import styled from 'styled-components';
import NewDiaryItem from '../components/NewDiaryItem';
import { TbArrowBigLeft } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import HeaderWrap from '../components/HeaderWrap';

const NewDiary = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderWrap>
        <ArrowButton onClick={() => navigate(-1)}>
          <TbArrowBigLeft style={{ fontSize: 18 }} />
        </ArrowButton>
      </HeaderWrap>
      <NewDiaryItem />
    </>
  );
};

export default NewDiary;

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
