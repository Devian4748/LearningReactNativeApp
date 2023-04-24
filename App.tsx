import React, {Profiler} from 'react';
import {StatusBar} from 'react-native';
import {
  AUTHENTICATION_SCREENS,
  SignInScreen,
  AuthScreen,
} from './src/screens/authentication';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };

  return (
    <Profiler id="app" onRender={onRenderCallback}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={AUTHENTICATION_SCREENS.SIGN_IN}
            component={SignInScreen}
          />
          <Stack.Screen
            name={AUTHENTICATION_SCREENS.AUTH}
            component={AuthScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Profiler>
  );
};

export default App;
