import React from "react";

import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform, Text } from "react-native";
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from "@react-navigation/native";
import Nav from "./Navigation/Nav";
import { createDrawerNavigator } from '@react-navigation/drawer'
import Become from "./Screens/Become";
import DrawerContent from "./components/DrawerContent";

const { Navigator, Screen } = createDrawerNavigator()

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <Navigator drawerContent={() => <DrawerContent/>} screenOptions={{headerShown: false
      }} >
      <Screen name="home" component={Nav} />
      <Screen name="ee" component={Become}  />
      </Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
