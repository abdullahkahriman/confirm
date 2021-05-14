/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View, Text, TouchableOpacity
} from 'react-native';
import Dialog from './src/components/Dialog';
import { MainContext, MainProvider } from './src/provider/MainProvider';

const App = () => {
  const [isDialog, setDialog] = useState(false);

  return (
    // <MainProvider>
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => setDialog(true)}>
        <Text style={{ fontSize: 20, letterSpacing: 3 }}>Are you sure?</Text>
      </TouchableOpacity>
      {isDialog && <Dialog isShow={true} />}
    </SafeAreaView>
    // </MainProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});

export default App;
