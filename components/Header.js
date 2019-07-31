import React from "react";
import {View, StyleSheet, Text} from "react-native";

import colors from "../globalStyles/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.greyLight,
    minHeight: 80,
  },
  title: {
    fontSize: 20,
    color: colors.greyDark,
    textTransform: "uppercase",
    fontWeight: "200",
    letterSpacing: 2,
  },
});

const Header = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title ? props.title : "PB App"}</Text>
      </View>
    </View>
  );
};

export default Header;
