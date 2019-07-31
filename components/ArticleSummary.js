import React from "react";
import {View, StyleSheet, Text} from "react-native";
import colors from "../globalStyles/colors";

const styles = StyleSheet.create({
  header: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#ffffff",
    flex: 2
  },
  content: {
    padding: 4,
    color: colors.greyDark,
  }
});

const ArticleSummary = ({title, summary}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>{title}</Text>
        <Text>{summary}</Text>
      </View>
    </View>
  );
};

export default ArticleSummary;
