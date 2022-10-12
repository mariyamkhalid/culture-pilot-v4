import { FC, useState } from "react";
import { Text, TouchableHighlight, Slider, View } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const BACKGROUND_COLOR = "#FFF8ED";

export type Props = {};
const AudioPlayer: FC<Props> = ({}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <View style={styles.emptyContainer}>
      <View style={styles._playingView}>
        <TouchableHighlight
          underlayColor={BACKGROUND_COLOR}
          style={styles.wrapper}
          //   onPress={this._onPlayPausePressed}
          //   disabled={this.state.isLoading}
        >
          {isPlaying ? (
            <AntDesign name="pause" size={40} color="black" />
          ) : (
            <AntDesign name="play" size={40} color="#0D1AB1" />
          )}
        </TouchableHighlight>
        <View style={{ flexDirection: "column", marginHorizontal: 5 }}>
          <Text style={styles._playingTitle}>Name</Text>
          <Text style={styles._playingSubTitle}>50s Chicago Art</Text>
        </View>
      </View>
      <Slider
        // ref={this._mountVideo}
        style={styles.playbackSlider}
        // value={this._getSeekSliderPosition()}
        // onValueChange={this._onSeekSliderValueChange}
        // onSlidingComplete={this._onSeekSliderSlidingComplete}
        // disabled={this.state.isLoading}
        thumbTintColor={"#FF4401"}
        minimumTrackTintColor={"#6A99E0"}
        maximumTrackTintColor={"#6A99E0"}
      />
      <View style={styles.timestampRow}>
        <Text
          style={[
            styles.text,
            styles.buffering,
            { fontFamily: "CutiveMono_400Regular" },
          ]}
        ></Text>
        <Text
          style={[
            styles.text,
            styles.timestamp,
            { fontFamily: "CutiveMono_400Regular" },
          ]}
        >
          1.00
        </Text>
      </View>
    </View>
  );
};

export default AudioPlayer;
