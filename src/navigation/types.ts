import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Details: {
    name: string;
    birthYear: string;
  };
  CityExplore: {
    city_name: string;
    init_latitude: number;
    init_longitude: number;
  };
  TourExplore: {
    tour_name: string;
  };
  ArtifactDetail: {
    artifact_name: string;
  };
  LiveExplore: {
    tour_name: string;
  };
};
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "Details"
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "Details"
>;

export type CityExploreScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "CityExplore"
>;

export type TourExploreScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "TourExplore"
>;

export type LiveExploreScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "LiveExplore"
>;

export interface Org {
  OrgPhysical: boolean;
  OrgLatitude: number;
  OrgLongitude: number;
  OrgName: string;
  OrgDescription: string;
  OrgImageUri: string;
  City: string;
  OrgTours: string[];
}
