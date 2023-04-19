import React, {Profiler} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Platform,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {youtubeLogoImage, kungFuPandaImage, globalImage} from './assets';
const LoginScreen = () => {
  const onRenderCallback = (id: string, phase: string) => {
    console.log(id, phase);
  };
  return (
    <Profiler id="login_screen" onRender={onRenderCallback}>
      <SafeAreaView style={styles.container}>
        <Swiper>
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
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 100,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
  },
});

export default LoginScreen;
