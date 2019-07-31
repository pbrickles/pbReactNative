import React from "react";
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faQuestionCircle,
  faNewspaper,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

import HomeScreen from "../screens/home";
import AboutScreen from "../screens/about";
import ListScreen from "../screens/list";
import stackNavigator from "./stackNavigator";

// create a bottom tab navigator
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
    },
    News: {
      screen: stackNavigator,
    },
    Bookmarks: {
      screen: ListScreen,
      params: {
        isBookmarks: true,
      }
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: () => {
        const {routeName} = navigation.state;
        switch (routeName) {
          case "Home":
            return <FontAwesomeIcon icon={faHome} />;
          case "About":
            return <FontAwesomeIcon icon={faQuestionCircle} />;
          case "News":
            return <FontAwesomeIcon icon={faNewspaper} />;
          case "Bookmarks":
            return <FontAwesomeIcon icon={faBookmark} />;
          default:
            return null;
        }
      },
    }),
  }
);

export default createAppContainer(TabNavigator);
