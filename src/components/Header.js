/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import colors from '../constants/colors/colors';

import ListIcon from '../assets/icons/list.png';
import LogoIcon from '../assets/icons/logo.png';
import SearchIcon from '../assets/images/search.png';
import LeftArrowIcon from '../assets/icons/arrow.png';
 
const Header = ({search, onChangeText, onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{width: '10%'}}>
        <TouchableOpacity onPress={onPress}>
        {/* if/else for list/arrow icons */}
          <Image
            source={LeftArrowIcon}
            resizeMode="contain"
            style={styles.headerImage}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Image source={LogoIcon} style={{width: 160}} />
      </View>

      <View style={{width: '13%'}}>
        <TouchableOpacity>
          <Image
            // source={{
            //   uri: {WeedIcon},
            // }}
            source={SearchIcon}
            resizeMode="cover"
            style={styles.headerSearchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3%',
    backgroundColor: colors.darkLight,
    // borderBottomWidth: 1,
    // borderBottomColor: 'white',
  },
  headerImage: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    width: '70%',
    // height: '100%',
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // marginHorizontal: '3%',
    borderColor: colors.orange,
    borderWidth: 1,
  },
  headerSearchIcon: {
    width: 45,
    height: 45,
    paddingRight: 10,
  },
  search: {
    color: colors.white,
    // placeholderTextColor: colors.white,
  },
});

export default Header;
