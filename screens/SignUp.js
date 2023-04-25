import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { getPopular } from "../api/movies";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import Constants from "../constants/constants";
import Styles from "../styles/Styles";
import Icon from "react-native-vector-icons/AntDesign";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRP, setPasswordRP] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (password == passwordRP) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateUserProfile(name);
      navigation.navigate("StartDrawer");
    } else {
      console.log("Password does not match");
      Alert.alert("Password does not match");
    }
  };
  const updateUserProfile = (name) => {
    const authe = getAuth();
    const user = authe.currentUser;
    if (user) {
      updateProfile(authe.currentUser, {
        displayName: name,
        photoURL:
          "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745",
      });
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.arrowBack}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrowleft" color={"#7892F9"} size={30}></Icon>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHeader}>Sign up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholderTextColor={Constants.placeHolder}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor={Constants.placeHolder}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={Constants.placeHolder}
          secureTextEntry
        />
        <TextInput
          placeholder="Repeat Password"
          placeholderTextColor={Constants.placeHolder}
          style={styles.input}
          value={passwordRP}
          onChangeText={(text) => setPasswordRP(text)}
          secureTextEntry
        />
      </View>
      <Text style={styles.textSignup}>
        Have a account?{" "}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.link}>Sign in</Text>
        </TouchableOpacity>
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: Constants.baseColor,
  },
  inputContainer: {
    width: "80%",
    marginTop: 70,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#7892F9",
    color: "red",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: Constants.textColor,
    color: Constants.textColor,
  },
  buttonText: {
    color: "#fff",
  },
  buttonOutline: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderColor: "#7892F9",
    borderWidth: 2,
  },
  link: {
    color: "#7892F9",
    textDecorationLine: "underline",
  },
  textSignup: {
    width: "80%",
    fontSize: 16,
    marginTop: 20,
    color: "#fff",
  },
  textHeader: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#7892F9",
  },
  buttonOutlineText: {},
  arrowBack: {
    position: "absolute",
    borderRadius: 100,
    color: "7892F9",
    zIndex: 10,
    top: 40,
    left: 10,
    marginLeft: 10,
  },
});
