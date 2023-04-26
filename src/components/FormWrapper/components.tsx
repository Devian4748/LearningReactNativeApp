import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import Props from './type';

const Component = ({children, type = 'default'}: Props) => {
  const containerStyle = {
    ...styles.container,
    ...(type === 'gray' && styles.containerGray),
    ...(type === 'white' && styles.containerWhite),
  };
  return (
    <View style={containerStyle}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled>
          {children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // add extra padding on Android
  },
  containerGray: {
    backgroundColor: '#333',
  },
  containerWhite: {
    backgroundColor: '#fff',
  },
});

export default Component;
