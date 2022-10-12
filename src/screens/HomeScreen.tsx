import { useNavigation } from "@react-navigation/native";
import React from "react";
import { get_cities } from "../util/ApiCalls";
import { useAsync } from "react-async";
import { HomeScreenNavigationProp } from "../navigation/types";
import CPSpinner from "../components/Spinner/Spinner";

import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const loadCities = async () => {
  const cities = await get_cities();
  return cities;
};
import RNPickerSelect from "react-native-picker-select";
import styles from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const cityMap = React.useRef({});
  const [currentCity, setCurrentCity] = React.useState("Chicago");
  const { data, error, isPending } = useAsync({
    promiseFn: loadCities,
  });
  if (isPending) return <CPSpinner />;
  if (error) return <Text>Something went wrong: ${error.message}</Text>;
  if (data) {
    var result = data.reduce(function (map, obj) {
      map[obj.City] = obj;
      return map;
    }, {});
    cityMap.current = result;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={{
            uri: cityMap.current[currentCity].ImageLocation,
          }}
          resizeMode="cover"
          style={styles.Bgimage}
          blurRadius={5}
        >
          <Text style={styles._mainTitle}>Welcome to</Text>
          <View style={styles._imageSliderView}>
            <Image
              style={{ width: 330, height: 320, alignSelf: "center" }}
              source={{
                uri: cityMap.current[currentCity].ImageLocation,
              }}
            />
            <Text style={styles._sliderTitle}>
              {" "}
              {cityMap.current[currentCity].City}
            </Text>
          </View>

          <TouchableOpacity
            style={styles._BtnView}
            onPress={() =>
              navigation.navigate("CityExplore", {
                city_name: currentCity,
                init_latitude: parseFloat(
                  cityMap.current[currentCity].Latitude
                ),
                init_longitude: parseFloat(
                  cityMap.current[currentCity].Longitude
                ),
              })
            }
          >
            <Text style={styles._BtnTitle}>Lets Go</Text>
          </TouchableOpacity>
          <View style={styles._BtnView}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              fixAndroidTouchableBug
              placeholder={{
                label: "Tour Another City",
                value: null,
                disabled: true,
              }}
              style={{
                inputIOS: {
                  ...styles._BtnTitle,
                },
                inputAndroid: {
                  ...styles._BtnTitle,
                },
              }}
              onValueChange={(value) => {
                if (value) {
                  setCurrentCity(value);
                }
              }}
              items={data.map((value) => {
                return { label: value.City, value: value.City };
              })}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
};

export default HomeScreen;
