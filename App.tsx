import React, {Profiler} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
const App = () => {
  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };

  return (
    <Profiler id="app" onRender={onRenderCallback}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <AppNavigator />
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
