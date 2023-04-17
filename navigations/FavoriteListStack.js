import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteList from "../screens/FavoriteList";
import MovieDetails from "../Components/MovieDetails";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Search from "../screens/Search";

export default function FavoriteListStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      initialRouteName="FavoriteList"
    >
      <Stack.Screen
        name="FavoriteList"
        component={FavoriteList}
        options={headerStyleFav}
      />
      {/* <Stack.Screen name="Search" component={Search} options={headerStyle} /> */}
      <Stack.Screen
        name="movieDetails"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function showSideBar() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon name="bars" size={20} color="#fff" style={{ marginLeft: 15 }} />
    </TouchableOpacity>
  );
}
function SearchClick() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
      <Icon name="search" size={20} color="#fff" />
    </TouchableOpacity>
  );
}
const headerStyleFav = {
  title: "Movies",
  headerStyle: { backgroundColor: "#000" },
  headerTitleStyle: { color: "#fff" },
  headerLeft: showSideBar,
  headerRight: SearchClick,
};
