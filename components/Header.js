import React from "react";
import {View, StyleSheet, Text} from "react-native";

import colors from "../globalStyles/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    minHeight: 80,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "800",
  },
});

const Header = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>My App</Text>
      </View>
    </View>
  );
};

export default Header;
