import {
  createAppContainer,
  createStackNavigator
} from "react-navigation";


import ListScreen from "../screens/list"
import DetailScreen from "../screens/detail";

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
  {initialRouteName: "List"}
);

export default createAppContainer(StackNavigator);