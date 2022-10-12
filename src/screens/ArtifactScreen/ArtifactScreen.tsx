import React, { useState } from "react";
import { Image, Text, TouchableOpacity, ScrollView, View } from "react-native";
import AudioPLayer from "../../components/AudioPLayer/AudioPLayer";
import styles from "./styles";

const ArtifactScreen = () => {
  const [hideText, setHidetext] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center", marginVertical: 10 }}>
          <Image
            style={{
              width: "100%",
              height: 400,
              alignSelf: "center",
            }}
            source={require("../../../assets/sliderImg2.png")}
          />
        </View>
        {/*============== TextDetails Area Starts Here ============== */}
        {hideText ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginHorizontal: 23,
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => setHidetext(false)}>
                <Text style={styles._showTours}>SHOW TEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginHorizontal: 23,
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => setHidetext(true)}>
                <Text style={styles._showTours}>HIDE TEXT</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.des}>
              The Mona Lisa or La Gioconda is a half-length portrait painting by
              Italian artist Leonardo da Vinci. Considered an archetypal
              masterpiece of the Italian Renaissance, it has been described as
              \"the best known, the most visited, the most written about, the
              most sung about, the most parodied work of art in the world\". The
              painting's novel qualities include the subject's enigmatic
              expression, the monumentality of the composition, the subtle
              modelling of forms, and the atmospheric illusionism."
            </Text>
          </View>
        )}
      </ScrollView>
      {/*============== hideClose End Here ============== */}
      <AudioPLayer />
    </View>
  );
};

export default ArtifactScreen;
