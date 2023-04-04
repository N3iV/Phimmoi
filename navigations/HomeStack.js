import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MovieDetails from "../components/MovieDetails";
import Search from "../screens/Search";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={headerStyle} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={headerStyle} />
      <Stack.Screen name="Search" component={Search} options={headerStyle} />
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
const headerStyle = {
  title: "Movies",
  headerStyle: { backgroundColor: "#000" },
  headerTitleStyle: { color: "#fff" },
  headerLeft: showSideBar,
  headerRight: SearchClick,
};
