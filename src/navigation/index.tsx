import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { PlayfairDisplay_400Regular } from "@expo-google-fonts/playfair-display";
import { CutiveMono_400Regular } from "@expo-google-fonts/cutive-mono";
import {
  Montserrat_300Light,
  Montserrat_900Black,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

import { Text } from "react-native";

import HomeStackNavigator from "./HomeStack";

const RootNavigator = () => {
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    CutiveMono_400Regular,
    Montserrat_300Light,
    Montserrat_900Black,
    Montserrat_400Regular,
    PlayfairDisplay_400Regular,
  });
  if (!fontsLoaded) {
    return <Text> Loading</Text>;
  } else {
    return (
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    );
  }
};

export default RootNavigator;
