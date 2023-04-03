import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeStack from "./HomeStack";
import FavoriteListStack from "./FavoriteListStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Constants from "../constants/constants";
import CustomDrawer from "../Components/CustomDrawer";
import Icon from "react-native-vector-icons/Ionicons";
const StartDrawer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: Constants.thirdColor,
        },
        drawerLabelStyle: {
          color: Constants.textColor,
          marginLeft: -15,
          padding: 5,
        },
        drawerType: "front",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: () => <Icon name="home-outline" size={20} color="#fff" />,
        }}
      />
      <Drawer.Screen
        name="MoviesListStack"
        component={FavoriteListStack}
        options={{
          title: "Favorite Movies",
          drawerIcon: () => (
            <Icon name="ios-list-outline" size={20} color="#fff" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default StartDrawer;

const screenStyle = {
  headerShown: false,
  headerTintColor: "#52657C",
  // title: "Movies",
  // headerTitleStyle: { color: "#fff" },
  // headerLeft: () => <Icon name="bars" size={20} color="#fff" />,
  // headerRight: () => <Icon name="search" size={20} color="#fff" />,
};
