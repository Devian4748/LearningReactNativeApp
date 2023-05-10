import React, {Profiler, useEffect, useState} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [auth, setAuth] = useState(false);
  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };

  return (
    <Profiler id="app" onRender={onRenderCallback}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Profiler>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // add extra padding on Android
  },
});
