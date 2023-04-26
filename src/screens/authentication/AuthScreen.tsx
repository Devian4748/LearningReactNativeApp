import {Profiler} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import FormWrapper from '../../components/FormWrapper';

const AuthScreen = () => {
  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };

  const handleSignInPress = async () => {
    console.log('SIGN_IN');
  };

  return (
    <Profiler id="auth_screen" onRender={onRenderCallback}>
      <FormWrapper>
        <View style={styles.formContainer}>
          <TextInput style={styles.formInput} />
          <TextInput style={styles.formInput} />
          <Button label="Sign In" onPress={handleSignInPress} />
        </View>
      </FormWrapper>
    </Profiler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  formInput: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 25,
    color: '#fff',
    backgroundColor: '#333',
    marginBottom: 20,
  },
});

export default AuthScreen;
