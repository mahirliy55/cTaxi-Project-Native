import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Button = ({ content, width, height,marginTop }) => {
  return (
    <View
      style={[
        styles.buttonWrapper,
        { width: width, height: height, marginTop: marginTop },
      ]}
    >
      <Text style={styles.buttonText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    backgroundColor: "#f7aa02",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    width: 114,
    height: 20,
    fontSize: 17,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#fff",
  },
});

export default Button;
