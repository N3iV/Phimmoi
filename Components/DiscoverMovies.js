import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { getDiscoverMovies } from "../api/movies";
import Constants from "../constants/constants";
import { IMAGE_POSTER_URL } from "../helper/config";

export default function DiscoverMovie() {
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const _getDiscoverMovies = async () => {
      const res = await getDiscoverMovies();
      setDiscoverMovies(res.results);
      const imgs = res.results.map(
        (data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`
      );
      let backImgs = [];
      for (let i = 0; i < 10; i++) {
        backImgs = [...backImgs, imgs[i]];
      }
      setImages(backImgs);
    };
    _getDiscoverMovies();
  }, []);
  return (
    <View>
      <SliderBox images={images} dotColor={Constants.secondaryColor} />
    </View>
  );
}
