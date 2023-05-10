import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Props from './type';

const Component = ({name, style, ...rest}: Props) => {
  return (
    <TouchableOpacity style={[styles.profile, style]} {...rest}>
      <View style={styles.profilerIcon} />
      <Text style={styles.profilerName}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 100,
    height: 130,
  },
  profilerIcon: {
    flex: 1,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 30,
    marginBottom: 5,
  },
  profilerName: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Component;
