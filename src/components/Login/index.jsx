import React from 'react';
import { auth } from '../../service/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { LoginBtn, LoginFormWrap } from './style';

const Login = () => {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <LoginFormWrap>
      <div>
        <h1>사진으로 기록하는 일기장</h1>
        <LoginBtn onClick={handleGoogleLogin}>구글 로그인하기</LoginBtn>
      </div>
      {userData ? userData.displayName : null}
    </LoginFormWrap>
  );
};

export default Login;
