import {
  AUTHENTICATION_SCREENS,
  SignInScreen,
  AuthScreen,
  ProfilerScreen,
} from '../screens/authentication';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AUTHENTICATION_SCREENS.SIGN_IN}
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AUTHENTICATION_SCREENS.AUTH}
        component={AuthScreen}
        options={{
          title: 'Sign In',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name={AUTHENTICATION_SCREENS.PROFILER}
        component={ProfilerScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
