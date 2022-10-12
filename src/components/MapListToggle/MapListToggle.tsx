import { Dispatch, SetStateAction, FC } from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";

export type Props = { updateMap: Dispatch<SetStateAction<boolean>> };
const MapListToggle: FC<Props> = ({ updateMap }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          updateMap(true);
        }}
      >
        <Icon size={40} name="map" style={styles.toggleIcon} />
      </TouchableOpacity>
      <View style={styles.verticleLine}></View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          updateMap(false);
        }}
      >
        <Icon size={40} name="reorder" style={styles.toggleIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default MapListToggle;
