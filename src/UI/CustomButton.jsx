import styled from 'styled-components';
import Colors from '../styles/Color';

export const CustomButton = styled.button`
  font-family: GangwonEdu_OTFBoldA;
  background-color: ${(props) => props.background || Colors.primaryColor};
  color: ${(props) => props.color || 'white'};
  border-radius: ${(props) => props.radius || '5px'};
  border: 1px solid ${Colors.colorWhiteGrey};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    outline: 0;
    color: ${Colors.colorWhite};
    background-color: ${(props) =>
      props.hoverbackground || Colors.primaryDeepColor};
  }
`;
