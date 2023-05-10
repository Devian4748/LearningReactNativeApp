import {Profiler} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Wrapper from '../../components/Wrapper';
import {View, StyleSheet, Text} from 'react-native';
import UserProfiler from '../../components/Profiler';
import ProfilerWithIcon from '../../components/ProfilerWithIcon';
type ProfilerScreenProp = {
  navigation: StackNavigationProp<
    Record<string, object | undefined>,
    string,
    any
  >;
};

const ProfilerScreen = ({navigation}: ProfilerScreenProp) => {
  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };
  const handleIncreasePress = async () => {};
  const handleNavigationPress = async () => {
    navigation.popToTop();
  };
  return (
    <Profiler id="profiler_screen" onRender={onRenderCallback}>
      <Wrapper>
        <View style={styles.container}>
          <UserProfiler name="Name" onPress={handleNavigationPress} />
          <ProfilerWithIcon
            onPress={handleIncreasePress}
            icon={
              <View style={styles.iconWrapper}>
                <View style={styles.line} />
                <View style={[styles.line, {transform: [{rotate: '90deg'}]}]} />
              </View>
            }
            name="프로필 추가"
          />
        </View>
      </Wrapper>
    </Profiler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    paddingHorizontal: 20,
    paddingTop: 130,
  },
  iconWrapper: {
    position: 'absolute',
    top: 27,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    width: 50,
    height: 5,
    backgroundColor: '#fff',
  },
});

export default ProfilerScreen;
