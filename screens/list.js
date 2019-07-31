import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Card from "../components/Card";
import Layout from "../components/Layout";

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

const fetchBookmarks = async () => {
  try {
    const bookmarks = await AsyncStorage.getItem("articles");
    if (bookmarks) {
      return JSON.parse(bookmarks);
    } else {
      return null;
    }
  } catch (e) {
    // read error
    return null;
  }
};

const styles = StyleSheet.create({
  touchable: {
    marginTop: 4,
    marginBottom: 0,
  },
});

const ListScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState();

  const getArticles = async () => {
    if (navigation.getParam("isBookmarks")) {
      const fetchedBookmarks = await fetchBookmarks();
      setArticles(fetchedBookmarks);
    } else {
      const fetchedArticles = await fetchNewsArticles();
      setArticles(fetchedArticles);
    }
  };

  useEffect(() => {
    getArticles();
  }, [navigation]);
  useEffect(() => {
    if (articles && articles.length > 0) {
      setLoading(false);
    } else {
      setLoading(false);
      setMessage(
        `There are no ${
          navigation.getParam("isBookmarks") ? "bookmarks" : "articles"
        } at the moment.`
      );
    }
  }, [articles, setArticles]);

  return (
    <Layout>
      <View>
        {articles &&
          articles.length > 0 &&
          articles.map((article, i) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", {article})}
              style={styles.touchable}
              key={`article_${i}`}
            >
              <Card article={article} />
            </TouchableOpacity>
          ))}
        {!articles && !loading && (
          <View>
            <Text>{message}</Text>
          </View>
        )}
        {loading && <ActivityIndicator size="large" color={colors.primary} />}
      </View>
    </Layout>
  );
};

export default ListScreen;
