import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screen/StartGameScreen";
import GameScreen from "./screen/GameScreen";
import GameOverScreen from "./screen/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const newGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numberOfRounds => {
    // Set amount of rounds that took computer to guess
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  // Check if game started or finished
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (userNumber && guessRounds > 0) {
    content = (
      <GameOverScreen
        numberOfAttempts={guessRounds}
        onRestart={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
