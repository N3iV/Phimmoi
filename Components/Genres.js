import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Styles from "../styles/Styles";

const Genres = ({ genre }) => {
  return (
    <View style={Styles.genreContainer}>
      <Text style={Styles.genre}>{genre.name}</Text>
    </View>
  );
};

export default Genres;
