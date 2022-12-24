import { useRef, useState } from 'react';
import styled from 'styled-components';
import { CustomButton } from '../UI/CustomButton';
import ImageUpload from './ImageUpload';

const NewDiaryItem = () => {
  const [ImageFile, setImageFile] = useState(null);
  const textRef = useRef();

  // 키를 뗐을 때
  const onKeyUpTextArea = () => {
    const enterCounter = textRef.current.value.length;
    if (enterCounter > 70) {
      alert('최대 글자수는 70자입니다.');
      return;
    }
  };

  // 키를 누를 때
  const onKeyDownTextArea = () => {
    const enterCounter = textRef.current.value.split('\n');
    const maxRows = 3;
    if (enterCounter.length >= maxRows) {
      alert('최대 3줄까지 가능합니다!');
      let modifiedText = enterCounter.slice(0, maxRows);
      textRef.current.value = modifiedText.join('\n');
      return;
    }
  };

  // 작성하기 눌렀을 때
  const onClickSubmit = () => {
    if (ImageFile === null) {
      alert('사진은 필수입니다!');
      return;
    }

    // firebase에 올리기
    console.log(ImageFile, textRef.current.value);
  };
  return (
    <main>
      <NewDiaryItemWrap>
        <h1 style={{ marginTop: 5 }}>새 일기 쓰기</h1>
        <article>
          <ImgWrap>
            <Img src={ImageFile} alt='이미지를 추가해주세요!' />
          </ImgWrap>
          <ImageUpload setImageFile={setImageFile} />
          <textarea
            style={{ width: '98%', resize: 'none' }}
            placeholder={'일기 내용을 작성해주세요!'}
            rows={3}
            ref={textRef}
            onKeyDown={onKeyDownTextArea}
            onKeyUp={onKeyUpTextArea}
            maxLength={70}
          />
          <CustomButton
            style={{ padding: 7, width: '100%' }}
            onClick={onClickSubmit}
          >
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
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: inset 0px 1px 1px 1px #575757;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
