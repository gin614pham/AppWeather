import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
});

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
          <Text>半角英数で入力してください</Text>
          <TouchableOpacity onPress={props.onClose}>
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AlertDialog;
