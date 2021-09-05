import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Components
import Button from "../components/Button";

const Onboard3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/mask3.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.imgTitle}>Booking</Text>
      <Text style={styles.imgSubTitle}>
        Book a taxi for your desired time and place
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Button content="GET STARTED!" width={343} height={45} marginTop={57} />
      </TouchableOpacity>
      <View style={styles.complateBar}>
        <View style={styles.bar}></View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imgTitle: {
    width: 313,
    height: 36,
    fontSize: 30,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textAlign: "center",
    color: "#262628",
    marginTop: 48,
  },
  imgSubTitle: {
    width: 283,
    height: 40,
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#262628",
    marginTop: 33,
  },

  complateBar: {
    position: "absolute",
    bottom: 60,
    width: 90,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#dcdcdc",
    alignItems: "flex-end",
  },

  bar: {
    width: 30,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#f7aa02",
  },
});

export default Onboard3;
