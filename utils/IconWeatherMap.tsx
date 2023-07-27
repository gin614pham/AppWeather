import {ImageSourcePropType} from 'react-native';

const iconMap: {[key: string]: ImageSourcePropType} = {
  '01d': require('../icons/01d.png'),
  '01n': require('../icons/01n.png'),
  '02d': require('../icons/02d.png'),
  '02n': require('../icons/02n.png'),
  '03d': require('../icons/03d.png'),
  '03n': require('../icons/03n.png'),
  '04d': require('../icons/04d.png'),
  '04n': require('../icons/04n.png'),
  '09d': require('../icons/09d.png'),
  '09n': require('../icons/09n.png'),
  '10d': require('../icons/10d.png'),
  '10n': require('../icons/10n.png'),
  '11d': require('../icons/11d.png'),
  '11n': require('../icons/11n.png'),
  '13d': require('../icons/13d.png'),
  '13n': require('../icons/13n.png'),
  '50d': require('../icons/50d.png'),
  '50n': require('../icons/50n.png'),
  unknown: require('../icons/unknown.png'),
};

const IconWeatherMap = (icon: string) => {
  return iconMap[icon] || iconMap.unknown;
};

export default IconWeatherMap;
