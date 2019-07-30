import {createAppContainer, createBottomTabNavigator} from "react-navigation";

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
  },
  {initialRouteName: "Home"}
);

export default createAppContainer(TabNavigator);
