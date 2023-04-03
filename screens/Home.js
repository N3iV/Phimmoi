import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DiscoverMovie from "../Components/DiscoverMovies";
import TrendingMovies from "../Components/TrendingMovies";
import TrendingPeople from "../Components/TrendingPeople";
import Styles from "../styles/Styles";

export default function Home(props) {
  return (
    <View style={Styles.sectionBg}>
      <DiscoverMovie />
      <TrendingPeople />
      <TrendingMovies navigation={props.navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
