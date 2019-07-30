import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import Header from "../components/Header";
import Card from "../components/Card";

import colors from "../globalStyles/colors";
import {mockArticle} from "../__mocks__/mockArticle";

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
    color: colors.greyDark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

const Layout = ({children}) => (
  <React.Fragment>
    <ScrollView style={styles.scrollView}>
      <Header />
      <View style={styles.body}>{children}</View>
      <View style={styles.footer}>
        <Text>Footer here</Text>
      </View>
    </ScrollView>
  </React.Fragment>
);

export default Layout;
