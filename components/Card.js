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
        source={article.imageIsUri ? {uri: article.image} : article.image}
      />
      <ArticleSummary title={article.title} summary={article.summary} />
    </View>
  );
};

export default Card;
