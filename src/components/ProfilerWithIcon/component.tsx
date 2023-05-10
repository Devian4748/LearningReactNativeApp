import React from 'react';
import Profiler from '../Profiler';
import Props from './type';
import {StyleSheet, TouchableOpacity} from 'react-native';

const Component = ({icon, name, ...rest}: Props) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
      <Profiler name={name} style={styles.profiler} />
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profiler: {
    width: 100,
    height: 130,
    pointerEvents: 'none',
  },
});

export default Component;
