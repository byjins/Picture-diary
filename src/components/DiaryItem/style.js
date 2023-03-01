import styled from 'styled-components';

export const DiaryItemWrap = styled.article`
  display: flex;
  gap: 5px;
  height: 100px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px 0px #224c9071;
  padding: 5px;
`;

export const Image = styled.img`
  width: 125px;
  height: 100%;
`;

export const ImageBox = styled.div`
  background-color: antiquewhite;
  border-radius: 5px;
  height: 100%;
  overflow: hidden;
`;

export const DirayInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  width: 65%;
`;

export const DiaryDate = styled.span`
  font-family: GangwonEduSaeeum_OTFMediumA;
  font-size: 20px;
  font-weight: 600;
`;

export const DiaryText = styled.span`
  font-family: GangwonEdu_OTFBoldA;
  font-size: 14px;
`;
