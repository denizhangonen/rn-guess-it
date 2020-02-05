import React from "react";

import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxHeight: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
