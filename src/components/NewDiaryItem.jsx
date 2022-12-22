import { useState } from 'react';
import styled from 'styled-components';
import ImageUpload from './ImageUpload';

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
              alt=''
              style={{ width: '100%', height: '100%' }}
            />
          </ImgWrap>
          <ImageUpload setImageFile={setImageFile} />
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
