import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const Input = ({ placeholder,keyboardType }) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={styles.input}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 301,
    height: 45,
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#efeff4",
    fontSize: 17,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    padding: 10,
    marginBottom: 20,
  },
});

export default Input;
