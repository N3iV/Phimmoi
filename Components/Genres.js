import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MovieDetailStyles from "../styles/MovieDetailStyles";

const Genres = ({ genre }) => {
  return (
    <View style={MovieDetailStyles.genreContainer}>
      <Text style={MovieDetailStyles.genre}>{genre.name}</Text>
    </View>
  );
};

export default Genres;
