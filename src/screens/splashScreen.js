/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import colors from '../constants/colors/colors';
import SplashBackground from '../assets/images/SplashBackground.png';
import I18n from '../i18n';
import LogoWhite from '../assets/images/logoWhite.png';

export default function SplashScreen(props) {
  return (
    <View style={styles.background}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('CategoryScreen')}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={SplashBackground}
          blurRadius={3}>
          <View
            style={{alignItems: 'center', justifyContent: 'center'}}
            onPress={() => props.navigation.navigate('CategoryScreen')}>
            <Image
              style={{width: '80%', height: '80%', resizeMode: 'center'}}
              source={LogoWhite}
            />
          </View>
        <Text style={{color: 'white'}}>{I18n.t('premium')}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.dark,
    flex: 1,
  },
});
