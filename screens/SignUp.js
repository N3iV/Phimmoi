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
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const onSignIn = () => {
  const navigation = useNavigation();
  navigation.navigate("Home");
};
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRP, setPasswordRP] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (password == passwordRP) {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
        }
      );
    } else {
      console.log("Mật khẩu không trùng khớp");
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.textHeader}>Sign up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          placeholder="Repeat Password"
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
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 10,
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
    color: "blue",
    textDecorationLine: "underline",
  },
  textSignup: {
    width: "80%",
    fontSize: 16,
    marginTop: 20,
  },
  textHeader: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#7892F9",
  },
  buttonOutlineText: {},
});
