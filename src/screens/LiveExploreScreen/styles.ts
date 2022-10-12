import { Dimensions, StyleSheet } from "react-native";
const SMALL_FONT = { fontFamily: "Montserrat_300Light", fontSize: 15 };
const PRIMARY_COLOR = "#31A0BC";
const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    ...SMALL_FONT,
    marginBottom: 15,
    textAlign: "center",
  },
  roundButton2: {
    bottom: 250,
    left: winWidth / 2 - 50,
    marginTop: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: PRIMARY_COLOR,
    position: "absolute",
  },
  roundButton2Text: { ...SMALL_FONT },
  preview: {
    height: winHeight,
    width: winWidth,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  ////////
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
