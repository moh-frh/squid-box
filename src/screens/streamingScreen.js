/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../constants/colors/colors';

export default function StreamingScreen(props) {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Streaming Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ChannelScreen')}>
        <Text style={styles.btn}>Back</Text>
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
