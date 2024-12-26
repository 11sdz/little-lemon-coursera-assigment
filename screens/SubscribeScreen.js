import * as React from "react";
import {
  Alert,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import TextAnimation from "../animations/TextAnimation";
import GreyButton from "../components/GreyButton";
import { useState } from "react";
import { validateEmail } from "../utils";


const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  // Add subscribe screen code here
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.lemonLogo}
      />
      <TextAnimation
        phrase={"Subscribe to our newsletter for our latest delicious recipes!"}
        customTextStyle={styles.phraseStyle}
      />
      <TextInput
        style={styles.textInput}
        inputMode={"email"}
        onChangeText={(text) => {
          if(validateEmail(text)){
            setDisabled(false);
          }else{
            setDisabled(true);
          }
          console.log(email);
          setEmail(text);
        }}
      />
      <GreyButton
        disabled={disabled}
        text={"Subscribe"}
        onPress={() => {
          if (email === "") {
            Alert.alert("Error", "\nPlease enter a valid email address");
            return;
          } else {
            Alert.alert(
              "Subscribed",
              `\nYou have successfully subscribed to our newsletter with the email: ${email}`
            );
            console.log("Subscribed");
          }
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  phraseStyle: {
    color: "grey",
    marginHorizontal: "5%",
  },
  lemonLogo: {
    resizeMode: "center",
    height: "35%",
    width: "35%",
  },
  textInput: {
    backgroundColor: "white",
    width: "80%",
    marginTop: "3%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default SubscribeScreen;
