import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { CustomButton } from '../UI/CustomButton';
import ImageUpload from './ImageUpload';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import WeatherList from './WeatherList';

const NewDiaryItem = () => {
  const [imageFile, setImageFile] = useState(null);
  const [pickDate, setPickDate] = useState(new Date());
  const [weather, setWeather] = useState(null);
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
  const onClickSubmit = async () => {
    if (!imageFile) {
      alert('사진은 필수입니다!');
      return;
    }

    if (!weather) {
      alert('날씨를 선택해주세요!');
      return;
    }

    // firebase에 올리기
    const res = await fetch(
      'https://picture-dairyd-default-rtdb.firebaseio.com/diary.json',
      {
        method: 'POST',
        body: JSON.stringify({
          title: textRef.current.value,
          weather,
          pickDate: pickDate
            .toLocaleDateString()
            .replace(/\./g, '')
            .replace(/\s/g, '-'),
        }),
      },
    );

    if (res.ok) {
      alert('등록완료!');
    }
  };
  return (
    <main>
      <NewDiaryItemWrap>
        <h1 style={{ marginTop: 5 }}>새 일기 쓰기</h1>
        <article>
          <ImgWrap>
            <Img src={imageFile} alt='이미지를 추가해주세요!' />
          </ImgWrap>
          <ImageUpload setImageFile={setImageFile} />
          <DatePicker
            selected={pickDate}
            onChange={(date) => setPickDate(date)}
            locale={ko}
          />
          <WeatherList setWeather={setWeather} />
          <textarea
            style={{ width: '98%', resize: 'none', marginTop: '5px' }}
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
