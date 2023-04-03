import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { getPopular } from "../api/movies";
import TrendingMovies from "../components/TrendingMovies";
import TrendingPeople from "../components/TrendingPeople";
import Styles from "../styles/Styles";
import DiscoverMovie from "../components/DiscoverMovies";

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
