import React from "react";
import {Alert, StyleSheet, TouchableOpacity, View} from "react-native";

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    marginTop: 4,
    marginBottom: 0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import Card from "../components/Card";

import {testArticle, mockArticle} from "../__mocks__/mockArticle";
import Layout from "../components/Layout";

const ListScreen = ({navigation}) => {
  const articles = [testArticle, mockArticle];
  return (
    <Layout>
      <View>
        {articles.map((article, i) => (
          <TouchableOpacity
            onPress={() => Alert.alert("I touched it")}
            style={styles.touchable}
            key={`article_${i}`}
          >
            <Card article={article} />
          </TouchableOpacity>
        ))}
      </View>
    </Layout>
  );
};

export default ListScreen;
