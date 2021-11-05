/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, FlatList, Image} from 'react-native';
import channels from '../assets/data/channels';
import colors from '../constants/colors/colors';
import Header from '../components/Header';
import {useRoute} from '@react-navigation/native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const ChannelScreen = ({navigation, route}) => {
  const {channel_id} = route.params;
  const [categoriesList, setCategoriesList] = useState([]);
  const [screenName, setScreenName] = useState();

  const routeName = useRoute();

  useEffect(() => {
    console.warn(routeName.name);
    setScreenName(routeName.name);
    setCategoriesList(
      channels.filter(ch => ch.categories.includes(channel_id)),
    );
  }, []);
  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: colors.darkLight,
        opacity: 0.5,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex: 1 / 3,
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        marginHorizontal: 5,
        marginBottom: 30,
        borderColor: colors.white,
        borderWidth: 0.3,
      }}>
      <Pressable
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('StreamingScreen', {uri: item.uri})}>
        <Image
          style={{width: 50, height: 50, resizeMode: 'cover', marginBottom: 5}}
          source={{uri: item.image}}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: colors.white,
            textAlign: 'center',
          }}>
          {item.title}
        </Text>
      </Pressable>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: colors.dark}}>
      <Header onPress={() => navigation.navigate('CategoryScreen')} screen={screenName} />
      <View style={{flex: 1, paddingHorizontal: 25}}>
        <FlatList
          // data={channelsList}
          data={categoriesList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
          // flex= {1/3}
          style={{flex: 1 / 3}}
          contentContainerStyle={{paddingVertical: 20}}
        />
      </View>
    </View>
  );
};

export default ChannelScreen;
