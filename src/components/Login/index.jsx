import React from 'react';
import { auth } from '../../service/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { LoginFormWrap } from './style';
import googleLogin from '../../asset/google_sign.png';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from '../../redux/User/loginUserSlice';

const Login = () => {
  const me = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();
  console.log(me);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        const { uid, displayName: dpName, email } = data.user;
        dispatch(setInfo({ id: uid, name: dpName, email: email }));
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // UID
  // email : byjin98@gmail.com
  // displayName : Jin

  return (
    <LoginFormWrap>
      <div>
        <h1>사진으로 기록하는 일기장</h1>
        <img
          src={googleLogin}
          onClick={handleGoogleLogin}
          alt='구글 로그인 버튼'
        />
      </div>
    </LoginFormWrap>
  );
};

export default Login;
