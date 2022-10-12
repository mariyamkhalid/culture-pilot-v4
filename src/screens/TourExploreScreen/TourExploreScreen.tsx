import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AudioPLayer from "../../components/AudioPLayer/AudioPLayer";

import styles from "./styles";
import { TourExploreScreenRouteProp } from "../../navigation/types";

const TourExploreScreen = () => {
  const route = useRoute<TourExploreScreenRouteProp>();
  const { tour_name } = route.params;
  const navigation = useNavigation();
  const PLAYLIST = [
    {
      name: "THE CHICAGO ART MUSEUM GUIDE 1",
      uri: "https://periyarfm.s3.amazonaws.com/audio/audio_file_3310.mp3",
      isVideo: false,
    },
    {
      name: "THE CHICAGO ART MUSEUM GUIDE 2",
      uri: "https://periyarfm.s3.amazonaws.com/audio/audio_file_3310.mp3",
      isVideo: false,
    },
    // {
    //   name: "THE CHICAGO ART MUSEUM GUIDE 3",
    //   uri:
    //     "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3",
    //   isVideo: false,
    // },
    // {
    //   name: "THE CHICAGO ART MUSEUM GUIDE 4",
    //   uri:
    //     "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3",
    //   isVideo: false,
    // },
    // {
    //   name: "THE CHICAGO ART MUSEUM GUIDE 5",
    //   uri:
    //     "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3",
    //   isVideo: false,
    // },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <TouchableOpacity
            style={styles._liveBtnView}
            onPress={() =>
              navigation.navigate("LiveExplore", {
                artifact_name: "50s Chicago Art",
              })
            }
          >
            <Ionicons
              style={{ marginHorizontal: 5 }}
              name="camera"
              size={30}
              color="black"
            />
            <Text style={styles._liveBtnTxt}>Live tour</Text>
          </TouchableOpacity>

          <Text style={styles._subTxt}>
            Use your smartphone to explore the works throughout The Chicago Art
            Museum. Headphones recommended.
          </Text>
          <View style={{ flexDirection: "column", marginHorizontal: 15 }}>
            {PLAYLIST.map((val, i) => {
              return (
                <View style={styles.artiface_tile}>
                  <View style={styles.tour_list_graph}>
                    <View style={styles.circleView}></View>
                    <View style={styles.line}></View>
                  </View>
                  <TouchableOpacity
                    style={styles.playIconView}
                    // onPress={() => this.setState({ selectedSongIndex: i })}
                    // this.props.navigation.navigate("ArtifactScreen")
                  >
                    <AntDesign
                      style={styles.playicon}
                      name="play"
                      size={30}
                      color="white"
                    />
                    <Image source={require("../../../assets/tourImg3.png")} />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "column",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("ArtifactDetail", {
                          artifact_name: "50s Chicago Art",
                        })
                      }
                    >
                      <Text style={styles._title2}>Artifact ONe</Text>
                      <Text style={styles._tourSubtitle}>
                        Sed consectetur semper build enim, iaculis suscit magna
                        an molestie ac. Quisque nec orci odio Historical Art
                        Museum.
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
          <View></View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.audio_container}>
        <AudioPLayer />
      </View>
    </View>
  );
};

export default TourExploreScreen;
