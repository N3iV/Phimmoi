import { View, Text, Linking, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getMovieById } from "../api/movies";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { IMAGE_POSTER_URL } from "../helper/config";
import Icon from "react-native-vector-icons/AntDesign";
import IconIos from "react-native-vector-icons/Ionicons";
import MovieDetailStyles from "../styles/MovieDetailStyles";
import Genres from "./Genres";
import Constants from "../constants/constants";
// const MovieDetails = (props) => {

const MovieDetails = () => {
  const [movieID, setMovieID] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [details, setDetails] = useState([]);

  //maybe delete
  const navigation = useNavigation();

  useEffect(() => {
    const _getMovie = async () => {
      const res = await getMovieById("2");
      setDetails(res);
    };
    _getMovie();
  }, []);

  return (
    <View style={MovieDetailStyles.sectionBg}>
      <View style={MovieDetailStyles.arrowBack}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Icon name="arrowleft" color={Constants.textColor} size={30}></Icon>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={MovieDetailStyles.imageBg}
          source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }}
        ></Image>
      </View>
      <Text style={MovieDetailStyles.detailsMovieTitle}>
        {details.original_title}
      </Text>
      <View style={MovieDetailStyles.linkContainer}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(details.homepage);
          }}
        >
          <Icon name="link" color={Constants.textColor} size={22}></Icon>
        </TouchableOpacity>
      </View>
      <View style={MovieDetailStyles.likeButton}>
        <TouchableOpacity onPress={() => setIsLiked((isLiked) => !isLiked)}>
          {isLiked ? (
            <IconIos
              name="heart-circle-outline"
              color={Constants.likeButtonColor}
              size={40}
            ></IconIos>
          ) : (
            <IconIos
              name="heart-dislike-circle-outline"
              color={Constants.textColor}
              size={40}
            ></IconIos>
          )}
        </TouchableOpacity>
      </View>
      <Text style={MovieDetailStyles.heading}>OVERVIEW</Text>
      <Text style={MovieDetailStyles.overview}>{details.overview}</Text>
      <View style={MovieDetailStyles.detailsContainer}>
        <View>
          <Text style={MovieDetailStyles.heading}>BUDGET</Text>
          <Text style={MovieDetailStyles.details}>$ {details.budget}</Text>
        </View>
        <View>
          <Text style={MovieDetailStyles.heading}>DURATION</Text>
          <Text style={MovieDetailStyles.details}>{details.runtime} min.</Text>
        </View>
        <View>
          <Text style={MovieDetailStyles.heading}>RELEASE DATE</Text>
          <Text style={MovieDetailStyles.details}>{details.release_date}</Text>
        </View>
      </View>
      <Text style={MovieDetailStyles.heading}>GENRE</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {details?.genres?.length &&
          details.genres.map((genre) => (
            <Genres key={genre.id} genre={genre} />
          ))}
      </View>
    </View>
  );
};

export default MovieDetails;
