import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getPopular } from "../api/movies";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const _getPopularMovies = async () => {
      const res = await getPopular();
      setPopularMovies(res);
    };
    _getPopularMovies();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>{ 
        navigation.navigate('MovieDetails')
      }}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }})