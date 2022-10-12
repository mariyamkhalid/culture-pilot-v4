import { StyleSheet } from "react-native";
export const TITLE_FONT = { fontFamily: "Montserrat_900Black", fontSize: 25 };
export const PRIMARY_COLOR = "#31A0BC";
export const SMALL_FONT = { fontFamily: "Montserrat_300Light", fontSize: 15 };
export const BASIC_FONT = { fontFamily: "Montserrat_400Regular", fontSize: 20 };

export default StyleSheet.create({
  ////Navigation Title styling
  headerStyle: {
    height: 120,
  },
  headerTitleStyle: {
    ...TITLE_FONT,
    fontSize: 20,
    color: PRIMARY_COLOR,
    alignSelf: "center",
  },
});
