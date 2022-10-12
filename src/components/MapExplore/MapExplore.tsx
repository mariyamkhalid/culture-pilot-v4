import React, { useState, Dispatch, SetStateAction } from "react";
import MapView, { Marker } from "react-native-maps";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles";
import { Org } from "../../navigation/types";

interface OutdoorObj {
  latitude: number;
  longitude: number;
  title: string;
  details: string;
}
export type Props = {
  initialLocation: number[];
  initialDeltas: number[];
  orgsArray: Org[];
  outdoorArray: OutdoorObj[];
  setCurrentOrg: Dispatch<SetStateAction<number>>;
  updateMap: Dispatch<SetStateAction<boolean>>;
};

const MapExplore: React.FC<Props> = ({
  initialLocation,
  initialDeltas,
  orgsArray,
  outdoorArray,
  setCurrentOrg,
  updateMap,
}) => {
  const [highlightsAreEnabled, setHighlightsAreEnabled] = useState(true);
  const [museumsAreEnabled, setMuseumsAreEnabled] = useState(true);
  const toggleHighlightsSwitch = () =>
    setHighlightsAreEnabled((previousState) => !previousState);
  const toggleMuseumslightsSwitch = () =>
    setMuseumsAreEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.mapLegend}>
        <TouchableWithoutFeedback onPress={() => toggleHighlightsSwitch()}>
          <View
            style={
              highlightsAreEnabled
                ? styles.legendItem
                : styles.legendItemDisabled
            }
          >
            <Icon
              size={40}
              name="star"
              style={
                highlightsAreEnabled
                  ? styles.legendIcon
                  : styles.legendIconDisabled
              }
            />
            <Text
              style={
                highlightsAreEnabled
                  ? styles.legendText
                  : styles.legendTextDisabled
              }
            >
              Highlights
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => toggleMuseumslightsSwitch()}>
          <View
            style={
              museumsAreEnabled ? styles.legendItem : styles.legendItemDisabled
            }
          >
            <Icon
              size={40}
              name="museum"
              style={
                museumsAreEnabled
                  ? styles.legendIcon
                  : styles.legendIconDisabled
              }
            />
            <Text
              style={
                museumsAreEnabled
                  ? styles.legendText
                  : styles.legendTextDisabled
              }
            >
              Museums
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <MapView
        style={styles.map}
        region={{
          latitude: initialLocation[0],
          longitude: initialLocation[1],
          latitudeDelta: initialDeltas[0],
          longitudeDelta: initialDeltas[1],
        }}
        showsUserLocation
      >
        {orgsArray
          .filter((x) => x.OrgPhysical)
          .map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: Number(marker.OrgLatitude),
                longitude: Number(marker.OrgLongitude),
              }}
              title={marker.OrgName}
              description={marker.OrgDescription}
              onCalloutPress={() => {
                console.log(index);
                setCurrentOrg(index);
                updateMap(false);
              }}
            >
              <Icon
                reverse
                size={40}
                name={museumsAreEnabled ? "museum" : ""}
                style={styles.orgCardIcon}
              />
            </Marker>
          ))}

        {outdoorArray.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: Number(marker.latitude),
              longitude: Number(marker.longitude),
            }}
            title={marker.title}
            description={marker.details}
            // onCalloutPress={() =>
            //   navigation.navigate("Artifact", {
            //     item: {
            //       image_location: marker.image_location,
            //       audio_location: marker.audio_location,
            //       title: marker.title,
            //       details: marker.details,
            //     },
            //   })
            // }
          >
            <Icon
              reverse
              size={20}
              name={highlightsAreEnabled ? "star" : ""}
              style={styles.orgCardIcon}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default MapExplore;
