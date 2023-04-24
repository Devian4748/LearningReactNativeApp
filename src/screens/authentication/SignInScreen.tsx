import React, {Profiler} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Platform,
} from 'react-native';
import Button from '../../components/Button';
import Swiper from 'react-native-swiper';
import {youtubeLogoImage, kungFuPandaImage, globalImage} from './assets';
import {NavigationProp} from '@react-navigation/native';
import {SCREENS} from './screenNames';
type SignInScreenProps = {
  navigation: NavigationProp<
    Record<string, object | undefined>,
    string,
    any,
    any,
    any
  >;
};

const SignInScreen = ({navigation}: SignInScreenProps) => {
  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };
  const handleSignInPress = async () => {
    navigation.navigate(SCREENS.AUTH);
  };
  return (
    <Profiler id="sign_in_screen" onRender={onRenderCallback}>
      <SafeAreaView style={styles.container}>
        <Swiper
          loop={false}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}>
          <View style={styles.slider}>
            <Image style={styles.image} source={youtubeLogoImage} />
            <Text style={styles.title}>Welcome to Movie App</Text>
          </View>
          <View style={styles.slider}>
            <Image style={styles.image} source={kungFuPandaImage} />
            <Text style={styles.title}>Discover Your Next Favorite</Text>
          </View>
          <View style={styles.slider}>
            <Image style={styles.image} source={globalImage} />
            <Text style={styles.title}>Watch Anywhere, Anytime</Text>
          </View>
        </Swiper>
        <Button label="Sign In" onPress={handleSignInPress} />
      </SafeAreaView>
    </Profiler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // add extra padding on Android
  },
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    backgroundColor: '#000',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dot: {
    backgroundColor: '#ccc',
  },
  activeDot: {
    backgroundColor: '#f00',
  },
});

export default SignInScreen;
