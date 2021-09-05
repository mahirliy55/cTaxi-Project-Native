import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const CountryNumber = ({ autoFocus }) => {
  const [phoneNumber, setphoneNumber] = useState("");
  const phoneInput = useRef(null);

  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="TR"
        layout="first"
        autoFocus={autoFocus}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={(text) => {
          setphoneNumber(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneContainer: {
    width: 301,
    height: 45,
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#efeff4",
  },

  textInput: {
    paddingVertical: 0,
    backgroundColor: "#fff",
    borderLeftWidth: 1,
    borderLeftColor: "#efeff4",
  },
});

export default CountryNumber;
