import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Onboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Onboard2")}>
        <Image
          source={require("../assets/img/mask.png")}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.imgTitle}>Request Taxi</Text>
      <Text style={styles.imgSubTitle}>
        Request a taxi and get picked up from n earby dock
      </Text>
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
  },

  bar: {
    width: 30,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#f7aa02",
  },
});

export default Onboard;
