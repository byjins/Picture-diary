import React from 'react';
import styled from 'styled-components';

const LoadingSpinner = () => {
  return <Spinner src='/spinner/spinner.gif' alt='' />;
};

export default LoadingSpinner;

const Spinner = styled.img`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
`;
