import React from "react";

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform
} from "react-native";

import Header from "../components/Header";

import colors from "../globalStyles/colors";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    minHeight: "100%"
  },
  scrollView: {
    backgroundColor: colors.blueLight,
    display: "flex",
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  footer: {
    alignSelf: "baseline",
    width: "100%",
    backgroundColor: colors.greyDark,
    color: colors.white,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
  },
});

const platform = Platform.OS === 'ios' ? 'iOS' : 'Android';
const message = `${platform} app built using React Native`;

const Layout = ({children}) => (
  <React.Fragment>
    <ScrollView style={styles.scrollView}>
      <Header />
      <View style={styles.body}>{children}</View>
      <View style={styles.footer}>
        <Text>{message}</Text>
      </View>
    </ScrollView>
  </React.Fragment>
);

export default Layout;
