import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Game Over</TitleText>
        <View style={styles.imageContainer}>
          <Image
            //   source={require("../assets/success.png")}
            source={{
              uri:
                "https://instagram.fbtz1-5.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/53800831_1930881887041157_2670422563145421704_n.jpg?_nc_ht=instagram.fbtz1-5.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Ca-NK_DNTI4AX-aYfdy&oh=2866cde69c1a37d0cf69790e2a626a03&oe=5ECDC27B"
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.numberOfAttempts}</Text>{" "}
            rounds to guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
