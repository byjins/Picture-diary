import React, { useState } from 'react';
import { BsCloudRainHeavy, BsCloudSnow } from 'react-icons/bs';
import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherCloudy,
} from 'react-icons/ti';
import { WeatherWrap, WeatherBox } from './style';

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
