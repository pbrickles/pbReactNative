import React from "react";
import {View} from "react-native";

import {mockArticle} from "../__mocks__/mockArticle";

import Article from "../components/Article";

export default () => {
  return (
    <View>
      <Article article={mockArticle} />
    </View>
  );
};
