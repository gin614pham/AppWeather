import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const AlertDialog = (props: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.onClose}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.title}>半角英数で入力してください</Text>
          <TouchableOpacity style={styles.button} onPress={props.onClose}>
            <Text style={styles.text}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
    marginTop: 10,
    width: 100,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default AlertDialog;
