import React from "react";
import {View} from "react-native";

import Article from "../components/Article";
import Header from "../components/Header";
import Bookmark from "../components/Bookmark";


const Detail = ({navigation}) => {
  return (
    <View>
      <Header title="News" />
      <Article article={navigation.getParam("article")} />
    </View>
  );
};

Detail.navigationOptions = ({navigation}) => {
  return {
    headerRight: <Bookmark article={navigation.getParam("article")} />,
  };
};

export default Detail;
