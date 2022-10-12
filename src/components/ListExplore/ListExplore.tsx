import { useState, SetStateAction, FC, Dispatch } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
export type Props = {};
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Org } from "../../navigation/types";

export type ListExploreRouteProps = {
  active_org: number;
  orgsArray: Org[];
  setCurrentOrg: Dispatch<SetStateAction<number>>;
};

const ListExplore: FC<ListExploreRouteProps> = ({
  active_org,
  orgsArray,
  setCurrentOrg,
}) => {
  const [tourTab, settourTab] = useState(true);
  const navigation = useNavigation();

  const updateCurrentOrg = (add: boolean) => {
    let newCurrentOrg = active_org;
    if (add) {
      newCurrentOrg = (active_org + 1) % orgsArray.length;
    } else {
      if (newCurrentOrg != 0) {
        newCurrentOrg = newCurrentOrg - 1;
      } else {
        newCurrentOrg = orgsArray.length - 1;
      }
    }

    setCurrentOrg(newCurrentOrg);
  };
  console.log(active_org);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll_container}
      >
        <View style={styles.image_container}>
          <TouchableOpacity
            onPress={() => updateCurrentOrg(false)}
            style={styles.lefticon}
          >
            <AntDesign name="leftcircleo" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateCurrentOrg(true)}
            style={styles.righticon}
          >
            <AntDesign name="rightcircleo" size={40} color="white" />
          </TouchableOpacity>

          <Image
            source={{
              uri: orgsArray[active_org].OrgImageUri,
            }}
            style={styles.org_image}
          />
        </View>
        <View style={styles._mainTxtRow}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles._title}>{orgsArray[active_org].OrgName}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.circle}></Text>
              <Text style={styles._subTitle}>Museum</Text>
            </View>
          </View>
          <Text style={styles._subTitle}>{orgsArray[active_org].City}</Text>
        </View>
        <Text style={styles.des}>{orgsArray[active_org].OrgDescription}</Text>
        {/*============== Tour Start Here ============== */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles._title}>Museum Tours</Text>
          <TouchableOpacity onPress={() => settourTab(!tourTab)}>
            <Text style={styles.showTours}>
              {tourTab ? "SHOW TOURS" : "CLOSE TOURS"}
            </Text>
          </TouchableOpacity>
        </View>
        {tourTab ? (
          <TouchableOpacity onPress={() => settourTab(!tourTab)}>
            <View style={styles.tour_imgs_view}>
              <Image
                style={styles.tour_imgs}
                source={require("../../../assets/tourImg.png")}
              />
              <Image
                style={styles.tour_imgs}
                source={require("../../../assets/tourImg2.png")}
              />
              <Image
                style={styles.tour_imgs}
                source={require("../../../assets/tourImg3.png")}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.tour_panel}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TourExplore", {
                  tour_name: "50s Chicago Art",
                })
              }
            >
              <View style={styles.tour_tile}>
                <View style={styles.tour_list_graph}>
                  <View style={styles.circleView}></View>
                  <View style={styles.line}></View>
                </View>
                <Image source={require("../../../assets/tourImg3.png")} />
                <View
                  style={{
                    flexDirection: "column",
                    marginHorizontal: 10,
                  }}
                >
                  <Text style={styles._title2}>50s Chicago Art</Text>
                  <Text style={styles._tourSubtitle}>
                    Sed consectetur semper build enim, iaculis suscit magna an
                    molestie ac. Quisque nec orci odio Historical Art Museum.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.tour_tile}>
              <View style={styles.tour_list_graph}>
                <View style={styles.circleView}></View>
                <View style={styles.line}></View>
              </View>
              <TouchableOpacity
                style={styles._playIconView}
                onPress={() => this.props.navigation.navigate("TourTwo")}
              ></TouchableOpacity>
              <Image source={require("../../../assets/tourImg3.png")} />
              <View
                style={{
                  flexDirection: "column",
                  marginHorizontal: 10,
                }}
              >
                <Text style={styles._title2}>50s Chicago Art</Text>
                <Text style={styles._tourSubtitle}>
                  Sed consectetur semper build enim, iaculis suscit magna an
                  molestie ac. Quisque nec orci odio Historical Art Museum.
                </Text>
              </View>
            </View>
            <View style={styles.tour_tile}>
              <View style={styles.tour_list_graph}>
                <View style={styles.circleView}></View>
                <View style={styles.line}></View>
              </View>
              <TouchableOpacity
                style={styles._playIconView}
                onPress={() => this.props.navigation.navigate("TourTwo")}
              ></TouchableOpacity>
              <Image source={require("../../../assets/tourImg3.png")} />
              <View
                style={{
                  flexDirection: "column",
                  marginHorizontal: 10,
                }}
              >
                <Text style={styles._title2}>50s Chicago Art</Text>
                <Text style={styles._tourSubtitle}>
                  Sed consectetur semper build enim, iaculis suscit magna an
                  molestie ac. Quisque nec orci odio Historical Art Museum.
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ListExplore;
