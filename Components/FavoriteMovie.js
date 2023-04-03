import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/movies";
import Styles from "../styles/Styles";
import { POSTER_IMAGE } from "../helper/config";

const FavoriteMovie = (props) => {
  const [favList, setFavList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getTrendingMovies();
      setFavList(data.results);
      setLoading(false);
    };
    getMovies();
  }, []);
  return (
    <View>
      <Text style={Styles.heading}>Favorite Movies</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={favList}
        renderItem={(item) => displayMovies(item, props)}
      />
    </View>
  );
};
const displayMovies = ({ item }, props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push("movieDetails", { movieId: item.id });
      }}
      style={{ margin: 10 }}
    >
      <View style={Styles.movieContainer}>
        <Image
          source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
          style={Styles.posterImageFavList}
        />
        <View style={Styles.descMovieContainer}>
          <Text style={Styles.favMovieTitle}>{item.original_title}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={Styles.favMovieDate}>{item.release_date}, </Text>
            <Text style={Styles.favMovieDate}>vote: {item.vote_average}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteMovie;
