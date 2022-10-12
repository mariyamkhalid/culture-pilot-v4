import { Dimensions, StyleSheet } from "react-native";
const winWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll_container: { marginHorizontal: 20 },
  image_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  org_image: { width: winWidth - 40, height: 200 },
  _mainTxtRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _title: {
    fontFamily: "BebasNeue_400Regular",
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 26,
    textTransform: "uppercase",
  },
  _title2: {
    fontFamily: "BebasNeue_400Regular",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 21,
  },
  _subTitle: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    color: "#77838F",
    marginHorizontal: 5,
  },
  des: {
    marginVertical: 10,
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 22,
    color: "#77838F",
  },
  circle: {
    width: 10,
    height: 10,
    padding: 5,
    backgroundColor: "#FF4401",
    borderRadius: 10 / 2,
  },
  showTours: {
    fontFamily: "BebasNeue_400Regular",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 18,
    color: "#1266BB",
  },
  tour_imgs_view: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
  },
  tour_imgs: {
    alignSelf: "center",
    zIndex: 2,
    marginHorizontal: -20,
  },
  lefticon: {
    position: "absolute",
    zIndex: 1,
  },
  righticon: {
    position: "absolute",
    alignSelf: "flex-end",
    zIndex: 1,
  },
  _playIconView: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 2,
    left: 25,
  },
  _tourSubtitle: {
    width: 220,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    color: "#77838F",
    textAlign: "auto",
  },
  lineImg: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  tour_panel: {
    alignSelf: "center",
    flexDirection: "column",
  },
  tour_tile: { flexDirection: "row", height: 150 },
  circleView: {
    width: 15,
    height: 15,
    backgroundColor: "#0000FF",
    borderRadius: 15 / 2,
    alignSelf: "center",
  },
  line: {
    alignSelf: "center",
    height: "100%",
    width: 3,
    backgroundColor: "black",
  },
  tour_list_graph: {
    flexDirection: "column",
    paddingHorizontal: 5,
  },
});
