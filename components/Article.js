import React from "react";
import {View, StyleSheet, Text} from "react-native";

import colors from "../globalStyles/colors";

const styles = StyleSheet.create({
  header: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: colors.greyDark,
    color: colors.white,
  },
  container: {
    display: "flex",
    backgroundColor: colors.white,
  },
  content: {
    padding: 8,
  },
});

const Article = ({article}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{article.title}</Text>
      </View>
      <View style={styles.content}>
        <Text>{article.content}</Text>
      </View>
    </View>
  );
};

export default Article;
