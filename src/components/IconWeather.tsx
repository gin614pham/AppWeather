import React from 'react';
import IconWeatherMap from '../utils/IconWeatherMap';
import {Image, View} from 'react-native';

interface Props {
  icon: string;
}

const IconWeather = (props: Props) => {
  const icon = IconWeatherMap(props.icon);

  return (
    <View>
      <Image source={icon} />
    </View>
  );
};

export default IconWeather;
