import {
  createAppContainer,
  createBottomTabNavigator,
  // createStackNavigator,
} from "react-navigation";

import HomeScreen from "../screens/home";
import AboutScreen from "../screens/about";
import ListScreen from "../screens/list";


// create a bottom tab navigator
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
    },
    List: {
      screen: ListScreen
    }
  },
  {initialRouteName: "Home"}
);

export default createAppContainer(TabNavigator);
