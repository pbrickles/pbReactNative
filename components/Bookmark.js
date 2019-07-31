import React from "react";
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBookmark, faStar} from "@fortawesome/free-solid-svg-icons";

import colors from "../globalStyles/colors";

const storeData = async article => {
  try {
    const storedArticlesJSON = await AsyncStorage.getItem("articles");
    let storedArticlesArray = storedArticlesJSON ? JSON.parse(storedArticlesJSON) : [];
    storedArticlesArray.push(article);
    await AsyncStorage.setItem("articles", JSON.stringify(storedArticlesArray)
    );
  } catch (e) {
    // saving error
  }
};

const styles = StyleSheet.create({
  bookmarkContainerAndroid: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: 80,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bookmarkContainerIos: {
    marginRight: 24,
  },
});

const Bookmark = ({style, ...props}) => {
  if (Platform.OS === "ios") {
    return (
      <TouchableOpacity onPress={() => storeData(props.article)}>
        <View style={styles.bookmarkContainerIos}>
          <FontAwesomeIcon icon={faBookmark} color={colors.white} />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableNativeFeedback onPress={() => storeData(props.article)}>
        <View style={styles.bookmarkContainerAndroid}>
          <FontAwesomeIcon icon={faStar} color={colors.white} size={18} />
        </View>
      </TouchableNativeFeedback>
    );
  }
};

export default Bookmark;
