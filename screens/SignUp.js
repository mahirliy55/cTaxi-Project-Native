import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// Components
import CountryNumber from "../components/CountryNumber";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../assets/img/ship.png")}
          width="120"
          height="127"
          resizeMode="contain"
          style={styles.topImg}
        />
      </View>
      <View style={styles.box}>
        <View style={styles.boxWrapper}>
          <View style={styles.boxWrapperTop}>
            <Text style={styles.boxSignup}>Sign Up</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.boxSignIn}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
        </View>
      </View>
      <View style={styles.border}></View>
      <View style={styles.inputWrapper}>
        <Input placeholder="Full Name" />
        <Input placeholder="Email" keyboardType="email-address" />
        <CountryNumber autoFocus={false} />
        <TouchableOpacity>
          <Button content="Sign Up" width={301} height={45} marginTop={39} />
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
    height: 365,
    backgroundColor: "#f7aa02",
    alignItems: "center",
  },
  topImg: {
    width: 120,
    height: 127,
    position: "absolute",
    top: 99,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    top: 100,
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
    width: 86,
    height: 29,
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0.23,
    textAlign: "center",
    color: "#202321",
  },
  boxSignIn: {
    width: 76,
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
    marginLeft: 70,
    marginTop: 9,
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
});

export default SignUp;
