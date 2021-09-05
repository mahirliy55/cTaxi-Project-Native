import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Onboard");
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/img/splash.png")}
      style={styles.image}
    >
      <Image
        style={styles.imageShip}
        source={require("../assets/img/ship.png")}
      ></Image>

      <Text style={styles.appTitle}>CTaxi</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 390,
    height: 870,
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    fontSize: 40,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
});

export default Splash;
