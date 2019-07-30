import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";

import colors from "../globalStyles/colors";

const fetchNewsArticles = async (page = 1) => {
  const query = new URLSearchParams({
    page,
    sources: "bbc-news",
    apiKey: "5a075e9526bf40aa990ede119896ce17",
  }).toString();

  const res = await fetch(`https://newsapi.org/v2/top-headlines?${query}`);
  const {articles = []} = await res.json();
  return articles;
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    marginTop: 4,
    marginBottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import Card from "../components/Card";

import Layout from "../components/Layout";

const ListScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const fetchedArticles = await fetchNewsArticles();
    setArticles(fetchedArticles);
  };

  useEffect(() => {
    getArticles();
  }, []);
  useEffect(() => {
    if (articles.length > 0) {
      setLoading(false);
    }
  }, [articles, setArticles]);

  return (
    <Layout>
      <View>
        {articles && articles.length > 0 ? (
          articles.map((article, i) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", {article})}
              style={styles.touchable}
              key={`article_${i}`}
            >
              <Card article={article} />
            </TouchableOpacity>
          ))
        ) : (
          <ActivityIndicator size="large" color={colors.primary} />
        )}
      </View>
    </Layout>
  );
};

export default ListScreen;
