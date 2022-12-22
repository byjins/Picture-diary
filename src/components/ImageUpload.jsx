import React, { useRef } from 'react';
import styled from 'styled-components';

const ImageUpload = ({ setImageFile }) => {
  const imageInput = useRef();

  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  const saveImageFile = () => {
    const file = imageInput.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageFile(reader.result);
    };
  };

  return (
    <ImageUploadBtn onClick={onCickImageUpload}>
      <input
        type='file'
        accept='image/*'
        style={{ display: 'none' }}
        ref={imageInput}
        onChange={saveImageFile}
      />
      이미지업로드
    </ImageUploadBtn>
  );
};

export default ImageUpload;

const ImageUploadBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2599e7;
  color: white;
  border-radius: 5px;
  margin-top: 3px;
  width: 100%;
  height: 30px;
`;