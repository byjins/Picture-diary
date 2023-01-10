import React from 'react';
import styled from 'styled-components';

const LoadingSpinner = () => {
  return <Spinner src='/spinner/spinner.gif' alt='' />;
};

export default LoadingSpinner;

const Spinner = styled.img`
  position: absolute;
  top: 40%;
  left: 28%;
  z-index: 999;
`;
