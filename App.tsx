import React, {Profiler} from 'react';
import {StatusBar} from 'react-native';
import LoginScreen from './src/screens/login/LoginScreen';
const App = () => {
  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };

  return (
    <Profiler id="app" onRender={onRenderCallback}>
      <StatusBar barStyle="light-content" />
      <LoginScreen />
    </Profiler>
  );
};

export default App;
