/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../constants/colors/colors';
// import VideoPlayer from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
import {LivePlayer} from 'react-native-live-stream';
export default function StreamingScreen({navigation, route}) {
  const {uri} = route.params;
  const [streamingUrl, setStreamingUrl] = useState();
  useEffect(() => {
    setStreamingUrl(uri);
  }, []);
  return (
    <View style={styles.background}>
      {/* {uri && streamingUrl && ( */}
        <VideoPlayer
          source={{
            uri: 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
          }}
        />
      {/* )} */}
      <Text>fghjklm</Text>
      {/* <VLCPlayer
        style={{width: 300}}
        videoAspectRatio="16:9"
        source={{ uri: "https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4"}}
    /> */}
      {/* <LivePlayer
        source={{
          uri: 'http://mantech-tv.xyz:8888/mantechnologysp/0775092766/1',
        }}
        style={{width: 200}}
        paused={false}
        muted={false}
        bufferTime={300}
        maxBufferTime={1000}
        resizeMode={'contain'}
        onLoading={() => {}}
        onLoad={() => {}}
        onEnd={() => {}}
      /> */}
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
