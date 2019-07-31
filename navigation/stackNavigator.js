import React from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";

import ListScreen from "../screens/list";
import DetailScreen from "../screens/detail";
import Bookmark from "../components/Bookmark";

import colors from "../globalStyles/colors";

const platform = Platform.OS === "ios" ? "iOS" : "Android";

// create a bottom tab navigator
const StackNavigator = createStackNavigator(
  {
    Detail: {
      screen: DetailScreen,
    },
    List: {
      screen: ListScreen,
    },
  },
  {
    initialRouteName: "List",
  }
);

export default createAppContainer(StackNavigator);
