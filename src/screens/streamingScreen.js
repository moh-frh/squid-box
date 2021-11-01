/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../constants/colors/colors';
import VideoPlayer from 'react-native-video';

export default function StreamingScreen({navigation, route}) {
  const {uri} = route.params;
  const [streamingUrl, setStreamingUrl] = useState();
  useEffect(() => {
    setStreamingUrl(uri);
  }, []);
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Streaming Screen {streamingUrl}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ChannelScreen')}>
        <Text style={styles.btn}>Back</Text>
      </TouchableOpacity>
      <VideoPlayer
            source={{
              // uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              uri: 'https://live-k2301-kbp.1plus1.video/sport/smil:sport.smil/playlist.m3u8',
            }}
            // source={TestVideo}
            controls={true}
            style={styles.video}
            fullscreenAutorotate
            fullscreen
            resizeMode= 'cover'
          />
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
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
