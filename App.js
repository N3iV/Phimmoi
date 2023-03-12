import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Icon from "react-native-vector-icons/FontAwesome";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="Home" component={Home} options={headerStyle} />
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
