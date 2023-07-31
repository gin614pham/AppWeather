import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AlertDialog from './AlertDialog';

interface Props {
  search: string;
  setSearch: (search: string) => void;
  isErrorInput: boolean;
  setIsErrorInput: (isErrorInput: boolean) => void;
  handleSearch: () => void;
}

const Header = (props: Props) => {
  return (
    <SafeAreaView style={styles.header}>
      <Icon name="location-arrow" size={30} color="white" />
      <TextInput
        style={styles.headerInput}
        placeholder="Search"
        placeholderTextColor={'white'}
        cursorColor={'white'}
        value={props.search}
        onChangeText={props.setSearch}
      />
      <TouchableOpacity onPress={props.handleSearch}>
        <Icon name="search" size={30} color="white" />
      </TouchableOpacity>
      <AlertDialog
        isVisible={props.isErrorInput}
        onClose={() => props.setIsErrorInput(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'rgba(52, 52, 52, 0.0)',
    padding: 5,
    paddingEnd: 10,
    paddingStart: 10,
    marginHorizontal: 12,
    marginVertical: 4,
    height: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
  },
  headerInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 8,
    marginEnd: 8,
    textAlign: 'right',
  },
  headerMenu: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
  },
});

export default Header;
