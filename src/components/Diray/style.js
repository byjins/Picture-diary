import styled from 'styled-components';

export const WeatherWrap = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const WeatherBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  box-shadow: 0px 0px 3px 0px;
  border-radius: 15px;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(42, 148, 248, 0.767);
  }
  &.active {
    background-color: rgba(42, 148, 248, 0.767);
  }
`;
