import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Styles from "../styles/Styles";
import SearchResults from "../components/SearchResults";
import { useNavigation } from "@react-navigation/native";

const Search = (props) => {
  const navigation = useNavigation();
  return (
    <View style={Styles.sectionBg}>
      <SearchResults navigation={props.navigation} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default Search;
