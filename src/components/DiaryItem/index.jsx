import React from 'react';
import { CustomButton } from '../../UI/CustomButton';
import {
  DiaryItemWrap,
  ImageBox,
  Image,
  DirayInfoBox,
  DiaryDate,
  DiaryText,
} from './style';

const DiaryItem = ({ diaryList }) => {
  const { id, image: preview, contents, pickDate } = diaryList;

  return (
    <DiaryItemWrap>
      <ImageBox>
        <Image src={preview} alt='이미지입니다' />
      </ImageBox>
      <DirayInfoBox>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DiaryDate>{pickDate}</DiaryDate>
          <CustomButton background='grey' style={{ padding: 5 }}>
            수정하기
          </CustomButton>
        </div>
        <DiaryText>{contents}</DiaryText>
      </DirayInfoBox>
    </DiaryItemWrap>
  );
};

export default DiaryItem;
