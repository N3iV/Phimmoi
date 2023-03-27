import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.textHeader}>Sign in</Text>
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
      </View>
      <Text style={styles.textSignup}>
        You don't have account?{" "}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            onAuthStateChanged(auth, (user) => {
              if (user) {
                navigation.navigate("Home");
              } else {
                console.log("sai tk hoac mk");
              }
            });
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.textLine}>OR</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity
          // onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Icon name="google" size={20} color="#ccc" style={styles.icon} />
          <Text style={styles.buttonOutlineText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

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
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonOutline: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderColor: "#7892F9",
    borderWidth: 2,
    flexDirection: "row",
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
  icon: {
    marginLeft: 40,
  },
  lineContainer: {
    width: "80%",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonOutlineText: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    marginLeft: 19,
    color: "#7892F9",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  textLine: {
    color: "#ccc",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});
