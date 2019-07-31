import React from "react";
import {View, StyleSheet, Text} from "react-native";
import Header from "../components/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const AboutScreen = () => (
  <View>
    <Header />
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  </View>
);

export default AboutScreen;
