import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { PRIMARY_COLOR, SMALL_FONT } from "../styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  Bgimage: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },

  _mainTitle: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 45,
    lineHeight: 53,
    fontWeight: "400",
    marginHorizontal: 30,
    marginRight: 80,
    marginTop: 30,
  },
  _mainTxt: {
    fontFamily: "BebasNeue_400Regular",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "400",
    marginHorizontal: 30,
    marginTop: 20,
  },
  _imageSliderView: {
    width: windowWidth - 40,
    height: windowHeight / 1.8,
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    paddingVertical: 15,
    marginHorizontal: 20,
    alignSelf: "center",
  },
  _sliderTitle: {
    flex: 1,
    fontFamily: "BebasNeue_400Regular",
    fontSize: 24,
    lineHeight: 27,
    fontWeight: "400",
    marginVertical: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  _BtnView: {
    width: 370,
    height: 64,
    backgroundColor: "#000000",
    opacity: 0.5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  _BtnTitle: {
    fontFamily: "BebasNeue_400Regular",
    color: "#fff",
    fontSize: 25,
    lineHeight: 27,
    fontWeight: "400",
    alignSelf: "center",
  },
  //Map Explore
  mapIcon: {
    marginVertical: 10,
    color: "#37a3be",
    paddingRight: 20,
  },
  map: {
    width: windowWidth,
    height: windowHeight - 400,
    zIndex: -1,
  },
  mapLegend: {
    position: "absolute",
    alignSelf: "center",
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
  },
  legendItem: {
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    padding: 7,
    backgroundColor: PRIMARY_COLOR,
  },
  legendItemDisabled: {
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    padding: 7,
    backgroundColor: "white",
  },
  legendText: {
    ...SMALL_FONT,
    alignSelf: "center",
    flex: 1,
    color: "white",
  },
  legendTextDisabled: {
    ...SMALL_FONT,
    alignSelf: "center",
    flex: 1,
    color: "black",
  },
  legendIcon: {
    marginLeft: 5,
    flex: 1,
    color: "white",
  },
  legendIconDisabled: {
    marginLeft: 5,
    flex: 1,
    color: PRIMARY_COLOR,
  },
});
