import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomButton } from '../../UI/CustomButton';

const IndexNav = (props) => {
  const navigate = useNavigate();
  return (
    <IndexNavWrap>
      <OptionWrap>
        <SelectBox>
          <option>최신순</option>
          <option>오래된 순</option>
        </SelectBox>
        <CustomButton
          onClick={() => navigate(`/slideshow/${props.year}-${props.month}`)}
          style={{ padding: '7px 10px' }}
        >
          슬라이드쇼로 보기
        </CustomButton>
      </OptionWrap>
      <CustomButton style={{ padding: 5 }} onClick={() => navigate('/write')}>
        일기쓰기
      </CustomButton>
    </IndexNavWrap>
  );
};

export default IndexNav;

const IndexNavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  justify-content: baseline;
  margin: 10px 0px;
`;

const OptionWrap = styled.div`
  display: flex;
  gap: 5px;
`;

const SelectBox = styled.select`
  height: 100%;
`;
