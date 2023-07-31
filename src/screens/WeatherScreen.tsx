import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {GetWeather} from '../api/GetWeather';
import IconWeather from '../components/IconWeather';

interface weather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const WeatherScreen = () => {
  const [search, setSearch] = useState('');
  const [isErrorInput, setIsErrorInput] = useState(false);
  const correctRegex = /^[a-zA-Z0-9]+$/;
  const [data, setData] = useState<weather | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeather('Tokyo');
  }, []);

  const fetchWeather = async (name: string) => {
    setLoading(true);
    try {
      const weather = await GetWeather(name);
      setData(weather);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (correctRegex.test(search)) {
      await fetchWeather(search);
    } else {
      setIsErrorInput(true);
    }

    setSearch('');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/01d.jpg')}
        resizeMode="cover">
        <Header
          search={search}
          setSearch={setSearch}
          isErrorInput={isErrorInput}
          setIsErrorInput={setIsErrorInput}
          handleSearch={handleSearch}
        />
        <View style={styles.body}>
          {loading ? (
            <Text>Loading...</Text>
          ) : data?.cod === 200 ? (
            <View>
              <Text style={styles.title}>{data?.name}</Text>
              <Text style={styles.subTitle}>
                {data?.main.temp
                  ? data?.main.temp + '°C'
                  : 'No weather data available'}
              </Text>
              <View style={styles.icon}>
                <IconWeather icon={data?.weather[0].icon || ''} />
              </View>
            </View>
          ) : (
            <Text>No weather data available</Text>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    alignItems: 'center',
  },
});
