import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import React from "react";

const TextAnimation = ({ style, customTextStyle, phrase }) => {
  const [textShown, setTextShown] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [phraseDisplayed, setPhraseDisplayed] = useState(false);

  useEffect(() => {
    if (phraseDisplayed) {
      return;
    } else {
      if (charIndex <= phrase.length) {
        setTimeout(() => {
          setTextShown(phrase.substr(0, charIndex));
          setCharIndex(charIndex + 1);
          console.log(textShown)
        }, 25);
        if (charIndex === phrase.length) {
          setPhraseDisplayed(true);
        }
      }
    }
  });
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.textStyle, customTextStyle]}>{textShown}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontFamily: "Roboto",
  },
});

export default TextAnimation;
