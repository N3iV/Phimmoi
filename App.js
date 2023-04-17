import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import AuthenticateStack from "./navigations/AuthenticateStack";
import StartDrawer from "./navigations/StartDrawer";
import SearchStack from "./navigations/SearchStack";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: false }}>
        <Stack.Screen
          name="AuthenticateStack"
          options={{ headerShown: false }}
          component={AuthenticateStack}
        />
        <Stack.Screen
          name="StartDrawer"
          options={{ headerShown: false }}
          component={StartDrawer}
        />
        <Stack.Screen
          name="SearchStack"
          options={{ headerShown: false }}
          component={SearchStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title: "Movies",
  headerStyle: { backgroundColor: "#000" },
  headerTitleStyle: { color: "#fff" },
  headerLeft: () => <Icon name="bars" size={20} color="#fff" />,
  headerRight: () => <Icon name="search" size={20} color="#fff" />,
};
const headerStyleFav = {
  title: "Favorite Movies",
  headerStyle: { backgroundColor: "#000" },
  headerTitleStyle: { color: "#fff" },
  headerLeft: () => <Icon name="bars" size={20} color="#fff" />,
};
