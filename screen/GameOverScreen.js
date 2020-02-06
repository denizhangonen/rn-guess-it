import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>
        Game Over! It took {props.numberOfAttempts} rounds for computer to guess
      </Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
