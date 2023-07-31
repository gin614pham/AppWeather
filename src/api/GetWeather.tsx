import axios from 'axios';

export const GetWeather = async (name: string) => {
  try {
    const res = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        name +
        '&appid=8f40326ad8c4ea8bd16996b61dda2b7e&units=metric',
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
