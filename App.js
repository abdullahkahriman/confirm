import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text, TouchableOpacity, Modal
} from 'react-native';
import Dialog from './src/components/Dialog';

const App = () => {
  const [isDialog, setDialog] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => setDialog(true)}>
        <Text style={{ fontSize: 20, letterSpacing: 3 }}>Are you sure?</Text>
      </TouchableOpacity>


      {/* Modal */}
      <Modal animationType="slide"
        transparent={true}
        visible={isDialog}
        onRequestClose={() => close()}>
        <Dialog changeVisible={setDialog} />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#333'
  }
});

export default App;
