import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeStackNavigatorParamList } from "./types";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CityExploreScreen from "../screens/CityExploreScreen/CityExploreScreen";
import TourExploreScreen from "../screens/TourExploreScreen/TourExploreScreen";
import ArtifactScreen from "../screens/ArtifactScreen/ArtifactScreen";
import LiveExploreScreen from "../screens/LiveExploreScreen/LiveExploreScreen";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen
        name="CityExplore"
        component={CityExploreScreen}
        options={{ title: "" }}
      />
      <HomeStack.Screen
        name="TourExplore"
        component={TourExploreScreen}
        options={{ title: "Tour" }}
      />
      <HomeStack.Screen
        name="ArtifactDetail"
        component={ArtifactScreen}
        options={({ route }) => ({ title: route.params.artifact_name })}
      />
      <HomeStack.Screen name="LiveExplore" component={LiveExploreScreen} />
    </HomeStack.Navigator>
  );
};
export default HomeStackNavigator;
