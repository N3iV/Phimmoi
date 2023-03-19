import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMovieById } from '../api/movies';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { IMAGE_POSTER_URL } from '../helper/config';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIos from 'react-native-vector-icons/Ionicons';
import Styles from '../styles';
// const MovieDetails = (props) => {

const MovieDetails = () => {
  const [id_movie, setIdMovie] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [details, setDetails] = useState("")

  //maybe delete
  const navigation = useNavigation();

  useEffect(() => {
    const _getMovie = async () => {
      const res = await getMovieById("2");
      setDetails(res);
    };
    _getMovie();
  }, []);
  // const getGenre = () => {
  //   return details.genres.map(item => {
  //     <View style={Styles.genreContainer}>
  //       <Text style={Styles.genre}>{item.name}</Text>
  //     </View>
  // })
  // }

  // console.log(details)
  return (
    <View style={Styles.sectionBg}>
      <View style={Styles.arrowBack}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home")
          }}>
          <Icon name='arrowleft' color={"#fff"} size={30}></Icon>
        </TouchableOpacity>
      </View>
      <View>
        <Image style={Styles.imageBg} source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }}></Image>
      </View>
      <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
      <View style={Styles.linkContainer}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(details.homepage)
          }}
        >
          <Icon name='link' color={"#fff"} size={22}></Icon>
        </TouchableOpacity>

      </View>
      <View style={Styles.likeButton}>
        <TouchableOpacity
          onPress={() => {
            if (isLiked) {
              setIsLiked(false)
            } else {
              setIsLiked(true)
            }
          }}>
          {
            isLiked ? <IconIos name='heart-circle-outline' color={"#ecadb5"} size={40}></IconIos> : <IconIos name='heart-dislike-circle-outline' color={"#fff"} size={40}></IconIos>
          }

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
      {/* <View style={{ display: 'flex', flexDirection: 'row', }}>{getGenre()}</View> */}

    </View>
  )
}

export default MovieDetails