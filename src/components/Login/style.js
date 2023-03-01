import styled from 'styled-components';

export const LoginFormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  & h1 {
    margin-bottom: 30px;
    font-size: 20px;
  }
`;

export const LoginBtn = styled.button`
  font-family: GangwonEdu_OTFBoldA;
  width: 100%;
  outline: 0;
  background: none;
  background-color: #224d90;
  border: none;
  color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 1px #cdcdcd;
  font-size: 14px;
  cursor: pointer;
`;
