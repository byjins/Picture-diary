import styled from 'styled-components';
import Colors from '../styles/Color';

export const CustomButton = styled.button`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.radius || '5px'};
  border: 1px solid ${Colors.colorWhiteGrey};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    outline: 0;
    color: ${Colors.colorWhite};
    background-color: ${(props) => props.hoverbackground};
  }
`;
