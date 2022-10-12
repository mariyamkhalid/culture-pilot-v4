import * as Location from "expo-location";

export async function get_user_location() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status === "granted") {
    const location = await Location.getLastKnownPositionAsync({
      maxAge: 60000,
      requiredAccuracy: 5,
    });
    if (location) {
      return [location.coords.latitude, location.coords.longitude];
    }
  } else {
    throw new Error("Location permission not granted");
  }
}

export async function get_cities() {
  try {
    let [user_latitude, user_longitude] = await get_user_location();
    let response = await fetch(
      `https://8g0icnt642.execute-api.us-east-1.amazonaws.com/prod/city?user_longitude=${user_longitude}&user_latitude=${user_latitude}`
    );
    let result = await response.json();
    return result;
  } catch (error) {
    let response = await fetch(
      `https://8g0icnt642.execute-api.us-east-1.amazonaws.com/prod/city`
    );
    let result = await response.json();
    return result;
  }
}

export async function get_outdoor_objects(city) {
  let response = await fetch(
    "https://p8mjmihdx5.execute-api.us-east-1.amazonaws.com/prod/getOutdoorObjects?city=" +
      city
  );
  let result = await response.json();
  return result;
}

export async function get_orgs(city) {
  let response = await fetch(
    "https://y4w20psf6c.execute-api.us-east-1.amazonaws.com/get_orgs?city=" +
      city
  ).catch(() => {
    throw { message: "Error retrieving orgs" };
  });
  if (!response.ok) {
    throw { message: "Error status returned retrieving orgs" };
  }
  let result = await response.json();
  return result;
}
