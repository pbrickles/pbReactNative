import React from "react";
import {View, StyleSheet, Image} from "react-native";

import ArticleSummary from "./ArticleSummary";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cccccc",
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  image: {
    flex: 1,
  },
});

const Card = ({style, ...props}) => {
  const {article} = props;
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.image}
        source={{uri: article.urlToImage}}
      />
      <ArticleSummary title={article.title} summary={article.description} />
    </View>
  );
};

export default Card;
