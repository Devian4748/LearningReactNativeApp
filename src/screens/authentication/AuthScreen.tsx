import {Profiler} from 'react';
import {View, TextInput, Text} from 'react-native';
import Button from '../../components/Button';
const AuthScreen = () => {
  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };
  const handleSignInPress = async () => {
    console.log('SIGN_IN');
  };
  return (
    <Profiler id="auth_screen" onRender={onRenderCallback}>
      <View>
        <View>
          <TextInput />
        </View>
        <View>
          <TextInput />
        </View>
        <View>
          <Button label="Sign In" onPress={handleSignInPress} />
        </View>
      </View>
    </Profiler>
  );
};

export default AuthScreen;
