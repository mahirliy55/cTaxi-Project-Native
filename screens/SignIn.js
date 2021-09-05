import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";

// Components
import CountryNumber from "../components/CountryNumber";

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.box}>
        <View style={styles.boxWrapper}>
          <View style={styles.boxWrapperTop}>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.boxSignIn}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.boxSignup}>Sign In</Text>
          </View>
          <View style={styles.line}></View>
        </View>
      </View>
      <View style={styles.border}></View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputTitle}>Sign in with your phone number</Text>
        <CountryNumber autoFocus={true} />
        <TouchableOpacity>
          <Button content="Sign In" width={301} height={45} marginTop={39}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.terms}>
        By using this app, you agree to our{" "}
        <Text style={{ fontWeight: "bold" }}>Terms and Conditions</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  top: {
    width: "100%",
    height: 220,
    backgroundColor: "#f7aa02",
    alignItems: "center",
  },

  box: {
    alignItems: "center",
    justifyContent: "center",
    top: 124,
  },
  boxWrapper: {
    position: "absolute",
    width: 343,
    height: 394,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  boxWrapperTop: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 22,
  },
  boxSignup: {
    width: 76,
    height: 29,
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0.23,
    textAlign: "center",
    color: "#202321",
  },
  boxSignIn: {
    width: 86,
    height: 29,
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0.23,
    textAlign: "center",
    color: "#c8c7cc",
  },
  line: {
    width: 37,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#f7aa02",
    marginTop: 9,
    marginLeft: 245,
  },
  border: {
    width: 341,
    height: 0,
    backgroundColor: "#d8d8d8",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#efeff4",
  },
  inputWrapper: {
    marginTop: 20.5,
  },
  terms: {
    position: "absolute",
    bottom: 43,
    width: 350,
    height: 15,
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#202321",
  },
  inputTitle: {
    width: 234,
    height: 20,
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#242e42",
    marginBottom:33,
    marginTop:16,
  },
});

export default SignIn;
