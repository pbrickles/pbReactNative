import React from "react";

import {View, Text, StyleSheet} from "react-native";
import Layout from "../components/Layout";

const styles = StyleSheet.create({
  homeBody: {
    minHeight: 300,
  }
})

const HomeScreen = () => (
  <React.Fragment>
    <Layout>
      <View style={styles.homeBody}>
        <Text>Welcome to the home screen</Text>
      </View>
    </Layout>
  </React.Fragment>
);

export default HomeScreen;
