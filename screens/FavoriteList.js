import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Styles from "../styles/Styles";
import FavoriteMovie from "../Components/FavoriteMovie";
import { useNavigation } from "@react-navigation/native";

const FavoriteList = (props) => {
  console.log("FavoriteList");
  const navigation = useNavigation();
  return (
    <View style={Styles.sectionBg}>
      <FavoriteMovie navigation={props.navigation} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default FavoriteList;
