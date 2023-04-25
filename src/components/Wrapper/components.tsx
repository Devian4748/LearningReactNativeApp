import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Props from './type';

const Component = ({children}: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // add extra padding on Android
  },
});

export default Component;
