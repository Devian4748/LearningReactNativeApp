import {Profiler, useRef} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Button from '../../components/Button';
import FormWrapper from '../../components/FormWrapper';
import {NavigationProp} from '@react-navigation/native';
import {SCREENS} from './screenNames';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthScreenProp = {
  navigation: NavigationProp<
    Record<string, object | undefined>,
    string,
    any,
    any,
    any
  >;
};

const AuthScreen = ({navigation}: AuthScreenProp) => {
  const emailPhoneInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };

  const handleSignInPress = async () => {
    await AsyncStorage.setItem('AUTH', 'TRUE');
    navigation.navigate(SCREENS.PROFILER);
  };

  const handleNextPress = () => {
    passwordInputRef.current?.focus();
  };

  return (
    <Profiler id="auth_screen" onRender={onRenderCallback}>
      <FormWrapper>
        <View style={styles.container}>
          <View>
            {/* View 로 감싸지 않으면 Keyboard 가 올라왔을 때, 부자연스러운 현상이 발생함 */}
            <Text style={styles.title}>WATCH MOVIE</Text>
          </View>
          <TextInput
            ref={emailPhoneInputRef}
            style={styles.formInput}
            placeholder="email or phone"
            placeholderTextColor="#ccc"
            returnKeyType="next"
            onSubmitEditing={handleNextPress}
          />
          <TextInput
            ref={passwordInputRef}
            style={[styles.formInput, {marginBottom: 10}]}
            placeholder="password"
            placeholderTextColor="#ccc"
            returnKeyType="done"
            onSubmitEditing={handleSignInPress}
          />
          <Button label="Sign In" onPress={handleSignInPress} />
        </View>
      </FormWrapper>
    </Profiler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 25,
  },
  formInput: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 25,
    color: '#fff',
    backgroundColor: '#333',
  },
  title: {
    alignSelf: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#f00',
  },
});

export default AuthScreen;
