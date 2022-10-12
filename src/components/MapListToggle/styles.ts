import { Dimensions, StyleSheet } from "react-native";
const winWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    right: 0,
    bottom: 0,
    width: winWidth,
    // height: 100,
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
  toggleIcon: {
    color: "#37a3be",
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  verticleLine: { height: "100%", width: 3, backgroundColor: "silver" },
});
