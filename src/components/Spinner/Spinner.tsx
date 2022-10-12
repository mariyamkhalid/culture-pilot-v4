import * as React from "react";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "./styles";

function CPSpinner() {
  return (
    <Spinner
      visible={true}
      textContent={"Loading..."}
      textStyle={styles.spinnerTextStyle}
    />
  );
}

export default CPSpinner;
