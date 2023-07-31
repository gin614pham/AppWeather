import {ImageBackgroundProps} from 'react-native';

const map: {[key: string]: ImageBackgroundProps} = {
  '01d': require('../../assets/images/clear_sky.jpg'),
  '01n': require('../../assets/images/clear_sky_n.jpg'),
  '02d': require('../../assets/images/few_clouds.jpg'),
  '02n': require('../../assets/images/few_clouds_n.jpg'),
  '03d': require('../../assets/images/scattered_clouds.jpg'),
  '03n': require('../../assets/images/scattered_clouds_n.jpg'),
  '04d': require('../../assets/images/broken_clouds.jpg'),
  '04n': require('../../assets/images/broken_clouds_n.jpg'),
  '09d': require('../../assets/images/shower_rain.jpg'),
  '09n': require('../../assets/images/shower_rain.jpg'),
  '10d': require('../../assets/images/rain.jpg'),
  '10n': require('../../assets/images/rain.jpg'),
  '11d': require('../../assets/images/thunderstorm.jpg'),
  '11n': require('../../assets/images/thunderstorm.jpg'),
  '13d': require('../../assets/images/snow.jpg'),
  '13n': require('../../assets/images/snow_n.jpg'),
  '50d': require('../../assets/images/mist.jpg'),
  '50n': require('../../assets/images/mist.jpg'),
  unknown: require('../../assets/images/01d.jpg'),
};

const BackgroundMap = (background: string) => {
  return map[background] || map.unknown;
};

export default BackgroundMap;
