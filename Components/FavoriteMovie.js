import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getFavoriteMovie, getTrendingMovies } from "../api/movies";
import Styles from "../styles/Styles";
import { POSTER_IMAGE } from "../helper/config";
import { collection, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase";
import {
  CommonActions,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";

const FavoriteMovie = (props) => {
  const [favList, setFavList] = useState();
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  console.log("here");
  useEffect(() => {
    const _getFavoriteMovie = async () => {
      const q = query(collection(db, "favoriteMovie"));
      const querySnapShop = await getDocs(q);
      const queryData = querySnapShop.docs.map((detail) => ({
        ...detail.data(),
        id: detail.id,
      }));
      console.log(queryData, " query data");
      setFavList(queryData);
    };
    _getFavoriteMovie();
  }, []);

  useEffect(() => {
    console.log("here----");
    if (!isFocused) {
      navigation.dispatch((state) => {
        const routes = state.routes.filter(
          (item) => item.name !== "SplashScreen"
        );

        return CommonActions.reset({
          ...state,
          routes,
          index: routes.length - 1,
        });
      });
    }
  }, [isFocused, navigation]);
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
