import React from "react";
import {View, StyleSheet, Text} from "react-native";
import Layout from "../components/Layout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const AboutScreen = () => (
  <Layout>
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  </Layout>
);

export default AboutScreen;
