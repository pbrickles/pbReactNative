import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

import colors from "../globalStyles/colors";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    minHeight: 90,
    backgroundColor: colors.greyDark,
  },
  container: {
    display: "flex",
    backgroundColor: colors.white,
  },
  content: {
    padding: 8,
  },
  title: {
    padding: 4,
    fontSize: 16,
    fontWeight: "200",
    letterSpacing: 2,
    color: colors.white
  },
  image: {
    width: "100%",
    height: 200,
  },
});

const Article = ({article}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{article.title}</Text>
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
