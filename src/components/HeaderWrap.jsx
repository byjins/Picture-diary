import React from 'react';
import styled from 'styled-components';

const HeaderWrap = (props) => {
  return <Header>{props.children}</Header>;
};

export default HeaderWrap;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  background-color: white;
  position: sticky;
  top: 0;
`;
