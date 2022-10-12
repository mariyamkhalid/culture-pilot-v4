import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState, Dispatch } from "react";
import { get_orgs, get_outdoor_objects } from "../../util/ApiCalls";

import { CityExploreScreenRouteProp } from "../../navigation/types";
import MapExplore from "../../components/MapExplore/MapExplore";
import MapListToggle from "../../components/MapListToggle/MapListToggle";
import ListExplore from "../../components/ListExplore/ListExplore";
import styles from "../styles";

const CityExploreScreen = () => {
  const route = useRoute<CityExploreScreenRouteProp>();
  const { city_name, init_latitude, init_longitude } = route.params;
  const [dataOrgs, setDataOrgs] = useState([]);
  const [dataOutdoors, setDataOutdoors] = useState([]);
  const [showMap, setShowMap] = useState(true);
  const [currentOrg, setCurrentOrg] = useState(0);

  // get orgs
  useEffect(() => {
    (async () => {
      await get_orgs(city_name).then((response) => setDataOrgs(response));
    })().catch((e) => {
      if (__DEV__) {
        console.log(e);
      }
    });
  }, []);

  //get outdoor objects
  useEffect(() => {
    (async () => {
      await get_outdoor_objects(city_name).then((response) =>
        setDataOutdoors(response)
      );
    })().catch((e) => {
      if (__DEV__) {
        console.log(e);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {showMap && (
        <MapExplore
          orgsArray={dataOrgs}
          outdoorArray={dataOutdoors}
          initialLocation={[init_latitude, init_longitude]}
          initialDeltas={[0.1, 0.1]}
          setCurrentOrg={setCurrentOrg}
          updateMap={setShowMap}
        />
      )}
      {!showMap && (
        <ListExplore
          orgsArray={dataOrgs}
          active_org={currentOrg}
          setCurrentOrg={setCurrentOrg}
        />
      )}
      <MapListToggle updateMap={setShowMap} />
    </View>
  );
};

export default CityExploreScreen;
