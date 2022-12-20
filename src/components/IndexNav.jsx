import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/CustomButton';

const IndexNav = () => {
  return (
    <IndexNavWrap>
      <OptionWrap>
        <SelectBox>
          <option>최신순</option>
          <option>오래된 순</option>
        </SelectBox>
        <SelectBox>
          <option>행복순</option>
          <option>안행복순</option>
        </SelectBox>
      </OptionWrap>
      <CustomButton
        background={Colors.primaryColor}
        color='white'
        hoverbackground={Colors.primaryDeepColor}
        style={{ padding: 5 }}
      >
        일기쓰기
      </CustomButton>
    </IndexNavWrap>
  );
};

export default IndexNav;

const IndexNavWrap = styled.section`
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
