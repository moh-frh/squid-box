/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../constants/colors/colors';

import I18n from '../i18n';

export default function SplashScreen(props) {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Splash Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('CategoryScreen')}>
        <Text style={styles.btn}>Gojjj</Text>
        <Text style={styles.btn}>{I18n.t('premium')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  text: {
    color: colors.white,
  },
  btn: {
    width: 40,
    height: 40,
    margin: 5,
    backgroundColor: colors.white,
    color: colors.darkLight,
  },
});
