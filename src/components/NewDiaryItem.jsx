import { useState } from 'react';
import styled from 'styled-components';
import { CustomButton } from '../UI/CustomButton';
import ImageUpload from './ImageUpload';
import Colors from '../styles/Color';

const NewDiaryItem = () => {
  const [ImageFile, setImageFile] = useState('');

  return (
    <main>
      <NewDiaryItemWrap>
        <h1 style={{ marginTop: 5 }}>새 일기 쓰기</h1>
        <article>
          <ImgWrap>
            <img
              src={ImageFile}
              alt='이미지를 추가해주세요!'
              style={{ width: '100%', height: '100%' }}
            />
          </ImgWrap>
          <ImageUpload setImageFile={setImageFile} />
          <textarea
            style={{ width: '98%', resize: 'none' }}
            placeholder={'일기 내용을 작성해주세요!'}
            rows={5}
            maxLength={70}
          />
          <CustomButton style={{ padding: 7, width: '100%' }}>
            작성하기
          </CustomButton>
        </article>
      </NewDiaryItemWrap>
    </main>
  );
};

export default NewDiaryItem;

const NewDiaryItemWrap = styled.section`
  display: flex;
  flex-direction: column;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: inset 0px 1px 1px 1px #575757;
`;
