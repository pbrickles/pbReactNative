import React from "react";

import {View, Text, StyleSheet} from "react-native";
import Header from "../components/Header";

const styles = StyleSheet.create({
  homeBody: {
    minHeight: 300,
  },
});

const HomeScreen = () => (
  <View>
    <Header />
    <View style={styles.homeBody}>
      <Text>Welcome to the home screen</Text>
    </View>
  </View>
);

export default HomeScreen;
