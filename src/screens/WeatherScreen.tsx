import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {getWeather} from '../api/getWeather';
import IconWeather from '../components/IconWeather';
import BackgroundMap from '../utils/BackgroundMap';
import {weather} from '../types';

const WeatherScreen = () => {
  const [search, setSearch] = useState('');
  const [isErrorInput, setIsErrorInput] = useState(false);
  const correctRegex = /^[a-zA-Z0-9 ]+$/;
  const [data, setData] = useState<weather | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeather('Tokyo');
  }, []);

  const fetchWeather = async (name: string) => {
    setLoading(true);
    try {
      const weather = await getWeather(name);
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
        source={BackgroundMap(data?.cod === 200 ? data?.weather[0].icon : '')}
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
