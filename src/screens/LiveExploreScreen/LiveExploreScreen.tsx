import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import styles from "./styles";

import { LiveExploreScreenRouteProp } from "../../navigation/types";

const LiveExploreScreen = () => {
  let cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" />
      </View>
    </Camera>
  );
};

export default LiveExploreScreen;
