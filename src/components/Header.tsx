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
      <Icon name="location-arrow" size={30} color="#7b7f85" />
      <TextInput
        style={styles.headerInput}
        placeholder="Search"
        value={props.search}
        onChangeText={props.setSearch}
      />
      <TouchableOpacity onPress={props.handleSearch}>
        <Icon name="search" size={30} color="#7b7f85" />
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
    borderColor: 'white',
    padding: 5,
    paddingEnd: 10,
    paddingStart: 10,
    marginHorizontal: 12,
    marginVertical: 4,
    height: 'auto',
    backgroundColor: '#F5FCFF',
  },
  headerInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7b7f85',
    flex: 8,
    marginEnd: 8,
    textAlign: 'right',
  },
  headerMenu: {
    flex: 1,
    textAlign: 'center',
    color: '#7b7f85',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
