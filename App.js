import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import AuthenticateStack from "./navigations/AuthenticateStack";
import StartDrawer from "./navigations/StartDrawer";
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
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{ headerTitleAlign: "center" }}
    //     initialRouteName="SignIn"
    //   >
    //     <Stack.Screen name="SignIn" component={SignIn} />
    //     <Stack.Screen name="Home" component={Home} options={headerStyle} />
    //     <Stack.Screen
    //       name="movieDetails"
    //       component={MovieDetails}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen
    //       name="FavoriteList"
    //       component={FavoriteList}
    //       options={headerStyleFav}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
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
