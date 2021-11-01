/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContent
 } from '@react-navigation/drawer';

//import Screens
import SplashScreen from "./src/screens/splashScreen";
import CategoryScreen from "./src/screens/categoryScreen";
import ChannelScreen from "./src/screens/channelScreen";
import StreamingScreen from "./src/screens/streamingScreen";
import COLORS  from './src/constants/colors/colors';

// const goToLink = (link) => {
//   Linking.openURL(link);
// }

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return(
    <DrawerContentScrollView {...props} style={{backgroundColor: COLORS.dark}}>
      <DrawerItemList {...props}/>
      <View>
        <TouchableOpacity
          onPress={() => { console.log("logo")}}
        >
          <Image source={require('./src/assets/images/logo.png')} resizeMode="contain" style={styles.logo}/> 
        </TouchableOpacity>
      </View>
      <DrawerItem label="Premium" labelStyle={{color: COLORS.white}} icon={() => {return <Image source={require('./src/assets/images/premium.png')}  style={{width: 30, height: 30}}/>}} onPress={()=> console.log("Premium")} />
      <DrawerItem label="Facebook" labelStyle={{color: COLORS.white}} icon={() => {return <Image source={require('./src/assets/images/facebook.png')}  style={{width: 30, height: 30}}/>}} onPress={()=> console.log("Facebook")} />
      <DrawerItem label="Instagram" labelStyle={{color: COLORS.white}} icon={() => {return <Image source={require('./src/assets/images/instagram.png')}  style={{width: 30, height: 30}}/>}} onPress={()=> console.log("Instagram")} />
      <DrawerItem label="Website" labelStyle={{color: COLORS.white}} icon={() => {return <Image source={require('./src/assets/images/internet.png')}  style={{width: 30, height: 30}}/>}} onPress={()=> console.log("Website")} />
      <DrawerItem label="Donate" labelStyle={{color: COLORS.white}} icon={() => {return <Image source={require('./src/assets/images/charity.png')}  style={{width: 30, height: 30}}/>}} onPress={()=> console.log("Donate")} />
      <DrawerItem label="Share" labelStyle={{color: COLORS.white}} icon={() => {return <Image source={require('./src/assets/images/share.png')}  style={{width: 30, height: 30}}/>}} onPress={()=> console.log("Share")} />
    </DrawerContentScrollView>
  )
}

const CategoryScreenDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen options={{ drawerItemStyle:{height:0}, headerShown: false}} name="C" component={CategoryScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CategoryScreen" component={CategoryScreenDrawer} options={{headerShown: false}}/>
        <Stack.Screen name="ChannelScreen" component={ChannelScreen} options={{headerShown: false}}/>
        <Stack.Screen name="StreamingScreen" component={StreamingScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;


const styles = StyleSheet.create({
    logo:{
        width: "60%",
        height: 100,
        alignSelf: "center"
    },
})

