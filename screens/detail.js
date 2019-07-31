import React from "react";
import {View} from "react-native";

import Article from "../components/Article";
import Layout from "../components/Layout";
import Bookmark from "../components/Bookmark";

import colors  from "../globalStyles/colors";

const Detail = ({navigation}) => {
  return (
    <Layout>
      <View>
        <Article article={navigation.getParam("article")} />
      </View>
    </Layout>
  );
};

Detail.navigationOptions = ({navigation}) => {
  return {
    headerStyle: {
      backgroundColor: colors.primary,
      borderBottomWidth: 0,
    },
    headerRight: <Bookmark article={navigation.getParam("article")} />,
  };
};

export default Detail;
