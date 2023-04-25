import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/Search";
import MovieDetails from "../Components/MovieDetails";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function SearchStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      initialRouteName="Search"
    >
      <Stack.Screen
        name="Search"
        component={Search}
        options={headerStyleSearch}
      />
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
    <TouchableOpacity onPress={() => navigation.navigate("StartDrawer")}>
      <Icon name="bars" size={20} color="#fff" style={{ marginLeft: 15 }} />
    </TouchableOpacity>
  );
}
const headerStyleSearch = {
  title: "Movies",
  headerStyle: { backgroundColor: "#000" },
  headerTitleStyle: { color: "#fff" },
  headerLeft: showSideBar,
};
