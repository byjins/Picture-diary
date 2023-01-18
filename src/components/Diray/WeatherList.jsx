import React, { useState } from 'react';
import styled from 'styled-components';
import { BsCloudRainHeavy, BsCloudSnow } from 'react-icons/bs';
import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherCloudy,
} from 'react-icons/ti';

const WeatherList = ({ setWeather }) => {
  const weatherDataList = [
    <BsCloudRainHeavy />,
    <BsCloudSnow />,
    <TiWeatherSunny />,
    <TiWeatherPartlySunny />,
    <TiWeatherCloudy />,
  ];
  const [divActive, setDivActive] = useState(null);

  const onClickWeather = (event) => {
    const dom = event.target;
    if (dom.classList.contains('wrap')) {
      return;
    }

    if (dom.dataset.value) {
      setDivActive(dom.dataset.value);
      setWeather(dom.dataset.value);
    } else {
      setDivActive(dom.parentNode.dataset.value);
      setWeather(dom.parentNode.dataset.value);
    }
  };

  return (
    <WeatherWrap onClick={onClickWeather} className='wrap'>
      {weatherDataList.map((item, idx) => {
        return (
          <WeatherBox
            key={idx}
            className={idx == divActive ? 'active' : ''}
            data-value={idx}
          >
            {item}
          </WeatherBox>
        );
      })}
    </WeatherWrap>
  );
};

export default WeatherList;

const WeatherWrap = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const WeatherBox = styled.div`
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
