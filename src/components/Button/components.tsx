import {Profiler} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Props from './type';
const Component = ({label, onPress}: Props) => {
  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };
  return (
    <Profiler id="button" onRender={onRenderCallback}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </Profiler>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#f00',
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Component;
