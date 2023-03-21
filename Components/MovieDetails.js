import { View, Text, Linking, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getMovieById } from "../api/movies";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { IMAGE_POSTER_URL } from "../helper/config";
import Icon from "react-native-vector-icons/AntDesign";
import IconIos from "react-native-vector-icons/Ionicons";
import Styles from "../styles/Styles";
import Genres from "./Genres";
import Constants from "../constants/constants";

const MovieDetails = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [details, setDetails] = useState([]);

  //maybe delete
  const navigation = useNavigation();

  useEffect(() => {
    const _getMovie = async () => {
      const res = await getMovieById(props.route.params.movieId);
      setDetails(res);
    };
    _getMovie();
  }, []);

  return (
    <View style={Styles.sectionBg}>
      <View style={Styles.arrowBack}>
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
          style={Styles.imageBg}
          source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }}
        ></Image>
      </View>
      <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
      <View style={Styles.linkContainer}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(details.homepage);
          }}
        >
          <Icon name="link" color={Constants.textColor} size={22}></Icon>
        </TouchableOpacity>
      </View>
      <View style={Styles.likeButton}>
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
      <Text style={Styles.heading}>OVERVIEW</Text>
      <Text style={Styles.overview}>{details.overview}</Text>
      <View style={Styles.detailsContainer}>
        <View>
          <Text style={Styles.heading}>BUDGET</Text>
          <Text style={Styles.details}>$ {details.budget}</Text>
        </View>
        <View>
          <Text style={Styles.heading}>DURATION</Text>
          <Text style={Styles.details}>{details.runtime} min.</Text>
        </View>
        <View>
          <Text style={Styles.heading}>RELEASE DATE</Text>
          <Text style={Styles.details}>{details.release_date}</Text>
        </View>
      </View>
      <Text style={Styles.heading}>GENRE</Text>
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
