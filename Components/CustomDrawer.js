import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Constants from "../constants/constants";
import Styles from "../styles/Styles";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={Styles.headingStack}>MovieApp</Text>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: Constants.thirdColor }}
      >
        <View style={Styles.drawerList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={Styles.logOut}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            paddingRight: 20,
          }}
        >
          <Icon
            name="log-out-outline"
            size={22}
            color={Constants.textColor}
            style={{ marginLeft: 20 }}
          ></Icon>
          <Text style={Styles.logOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
