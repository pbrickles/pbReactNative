import React from "react";
import {View} from "react-native";

import {mockArticle} from "../__mocks__/mockArticle";

import Article from "../components/Article";
import Layout from "../components/Layout";

const Detail = ({navigation}) => {
  return (
    <Layout>
      <View>
        <Article article={navigation.getParam("article")} />
      </View>
    </Layout>
  );
};

export default Detail;
