import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Styles from "../styles/Styles";

import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import Icon from "react-native-vector-icons/AntDesign";
import Constants from "../constants/constants";

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  const navigation = useNavigation();
  return (
    <View style={Styles.profileContainer}>
      <View style={Styles.arrowBack}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrowleft" color={Constants.textColor} size={30}></Icon>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={Styles.imageBg}
          source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
        ></Image>
      </View>
      <View style={Styles.avatarContainer}>
        <TouchableOpacity>
          <Image source={{ uri: user.photoURL }} style={Styles.avatar}></Image>
        </TouchableOpacity>
      </View>
      <Text style={Styles.name}>{user.displayName}</Text>

      <View style={Styles.inputContainer}>
        <View style={Styles.inputWrapper}>
          <Text style={Styles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            style={Styles.input}
            editable={false}
            value={user.email}
            // onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={Styles.inputWrapper}>
          <Text style={Styles.label}>UID</Text>
          <TextInput
            placeholder="UID"
            style={Styles.input}
            value={user.uid}
            editable={false}
          />
        </View>
        <View style={Styles.inputWrapper}>
          <Text style={Styles.label}>Phone</Text>
          <TextInput
            placeholder="Phone"
            style={Styles.input}
            editable={false}
            value={user.phoneNumber || "none"}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
