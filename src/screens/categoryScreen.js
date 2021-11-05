/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, FlatList, Image} from 'react-native';
import categories from '../assets/data/categories';
import colors from '../constants/colors/colors';
import Header from '../components/Header';
import {useRoute} from '@react-navigation/native';

const CategoryScreen = ({navigation}) => {
  const [categoriesList, setCategoriesList] = useState(categories);
  const [screenName, setScreenName] = useState();

  const route = useRoute();
  useEffect(() => {
    console.warn(route.name)
    setScreenName(route.name);
  }, []);

  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: colors.pink,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 80,
        marginHorizontal: 20,
        marginBottom: 20,
      }}>
      <Pressable
        onPress={() =>
          navigation.navigate('ChannelScreen', {channel_id: item.id})
        }
        style={{
          flexDirection: 'row',
          // justifyContent: 'flex-end',
          // alignItems: 'center',
        }}
        // onPress={() =>
        // navigation.navigate('ChannelsList', {category: item.name})
        // }
      >
        <View
          style={{
            width: '15%',
            height: '100%',
            borderRightWidth: 1,
            borderColor: 'white',
            paddingRight: '20%',
          }}>
          <Image source={item.image} style={{width: 45, height: 45}} />
        </View>
        <View
          style={{
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: colors.white,
            }}>
            {item.title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: colors.dark}}>
      <Header screen={screenName} />
      <FlatList
        // data={channelsList}
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // numColumns={3}
        style={{flex: 1}}
        contentContainerStyle={{paddingVertical: 20}}
      />
    </View>
  );
};

export default CategoryScreen;
