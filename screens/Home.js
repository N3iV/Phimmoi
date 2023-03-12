import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getPopular } from "../api/movies";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const _getPopularMovies = async () => {
      const res = await getPopular();
      setPopularMovies(res);
    };
    _getPopularMovies();
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
