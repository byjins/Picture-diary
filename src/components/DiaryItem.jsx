import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/CustomButton';

const DiaryItem = ({ diaryList }) => {
  const { id, image, text, date } = diaryList;
  console.log(text);
  return (
    <DiaryItemWrap>
      <ImageBox>
        <img src={image} alt='이미지입니다' />
      </ImageBox>
      <DirayInfoBox>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DiaryDate>{date}</DiaryDate>
          <CustomButton background='grey' style={{ padding: 5 }}>
            수정하기
          </CustomButton>
        </div>
        <DiaryText>{text}</DiaryText>
      </DirayInfoBox>
    </DiaryItemWrap>
  );
};

export default DiaryItem;

const DiaryItemWrap = styled.article`
  display: flex;
  gap: 5px;
  height: 100px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px 0px #224c9071;
  padding: 5px;
`;

const ImageBox = styled.div`
  background-color: antiquewhite;
  border-radius: 5px;
  width: 200px;
  height: 100%;
`;

const DirayInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  width: 100%;
`;

const DiaryDate = styled.span`
  font-family: GangwonEduSaeeum_OTFMediumA;
  font-size: 20px;
  font-weight: 600;
`;

const DiaryText = styled.span`
  font-family: GangwonEdu_OTFBoldA;
  font-size: 14px;
`;
