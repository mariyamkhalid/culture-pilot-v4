import { StyleSheet } from "react-native";
export const BACKGROUND_COLOR = "#FFF8ED";
const FONT_SIZE = 14;

export default StyleSheet.create({
  emptyContainer: {
    alignSelf: "stretch",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
  },
  _playingView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  wrapper: {
    marginHorizontal: 10,
  },
  _playingTitle: {
    fontFamily: "BebasNeue_400Regular",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 24,
  },
  _playingSubTitle: {
    fontFamily: "BebasNeue_400Regular",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 21,
    color: "#818181",
  },
  playbackSlider: {
    alignSelf: "stretch",
  },
  timestampRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    minHeight: FONT_SIZE,
  },
  text: {
    fontSize: FONT_SIZE,
    minHeight: FONT_SIZE,
  },
  buffering: {
    textAlign: "left",
    paddingLeft: 20,
  },
  timestamp: {
    textAlign: "right",
    paddingRight: 20,
  },
});
