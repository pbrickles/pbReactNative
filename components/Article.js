import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

import colors from "../globalStyles/colors";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    fontSize: 20,
    fontWeight: "bold",
    minHeight: 90,
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
  image: {
    width: "100%",
    height: "auto",
  },
});

const Article = ({article}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{article.title}</Text>
      </View>
      <View>
        <Image source={{uri: article.urlToImage}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text>{article.content}</Text>
      </View>
    </View>
  );
};

export default Article;
