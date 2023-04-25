import {
  AUTHENTICATION_SCREENS,
  SignInScreen,
  AuthScreen,
} from '../screens/authentication';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AUTHENTICATION_SCREENS.SIGN_IN}
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={AUTHENTICATION_SCREENS.AUTH} component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
