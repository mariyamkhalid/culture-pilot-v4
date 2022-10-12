import { Dimensions, StyleSheet } from "react-native";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;
import {
  BASIC_FONT,
  PRIMARY_COLOR,
  SMALL_FONT,
  TITLE_FONT,
} from "../../styles";

const win = Dimensions.get("window");

export default StyleSheet.create({
  // Org init page
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 55,
    width: (win.width * 2) / 3,
    alignSelf: "center",
    marginVertical: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: "#31A0BC",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  selectButtonText: {
    fontSize: 15,
    color: "#31A0BC",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  explore_header: {
    ...TITLE_FONT,
    fontSize: 38,
    color: "white",
    paddingBottom: 10,
    backgroundColor: PRIMARY_COLOR + "90",
  },
  explore_text: {
    ...BASIC_FONT,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: PRIMARY_COLOR + "90",
  },

  explore_main_container: {
    flex: 1,
  },
  explore_content_container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  spinnerTextStyle: {
    color: PRIMARY_COLOR,
  },

  /// /////////////////////////////
  // org card
  orgCard: { marginVertical: 40 },
  orgCardImage: { borderRadius: 20 },
  orgCardTitle: {
    ...SMALL_FONT,
    marginVertical: 10,
    textAlign: "justify",
    fontWeight: "bold",
    flex: 10,
    paddingRight: 30,
  },
  orgCardDescription: {
    marginTop: 5,
    marginBottom: 10,
    textAlign: "justify",
    flex: 10,
    paddingRight: 30,
  },
  orgCardDetails: {
    flexDirection: "row",
  },
  orgCardStats: {
    marginVertical: 10,
    flex: 3,
  },
  orgCardIcon: {
    flex: 1,
    marginVertical: 10,
    color: "#37a3be",
    paddingRight: 20,
  },
  orgCardText: {
    flex: 10,
  },

  /// //////////////////////////////
  // org page
  orgContainer: { flex: 1, justifyContent: "center" },
  orgImage: {
    flex: 2,
  },
  orgTitle: {
    ...TITLE_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
  orgMainText: { flex: 2 },
  orgDetails: {
    ...BASIC_FONT,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  orgDetailScroll: {},

  popoverText: {
    ...SMALL_FONT,
    margin: 5,
  },

  exploreToursContainer: { flex: 1, justifyContent: "center" },
  exploreToursButton: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 25,
    paddingHorizontal: 5,
    width: win.width / 2,
    alignSelf: "center",
  },
  exploreToursText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  orgInfo: {
    flex: 0.5,
  },
  orgText: { ...SMALL_FONT, textAlign: "center" },
  orgIcon: {
    color: PRIMARY_COLOR,
    paddingHorizontal: 20,
  },
  orgMedia: {
    flexDirection: "row",
    alignSelf: "center",
  },
  /// ////////////////////
  // Map
  mapIcon: {
    marginVertical: 10,
    color: "#37a3be",
    paddingRight: 20,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  map: {
    width: winWidth,
    height: winHeight,
    zIndex: -1,
    flex: 11,
  },
  mapLegend: {
    position: "absolute",
    alignSelf: "center",
    right: 0,
    top: 0,
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
