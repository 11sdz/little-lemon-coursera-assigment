import { TouchableOpacity, Text ,StyleSheet} from 'react-native'
import React from 'react'

const GreyButton = ({onPress,text}) => {
  return (
    <TouchableOpacity style={styles.newsletterButton} onPress={() => onPress()}>
          <Text style={styles.buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
newsletterButton:{
    backgroundColor: 'grey',
    width:'80%',
    elevation:10,
    borderRadius:10,
    marginVertical:'5%'
  },buttonTextStyle:{
    fontSize: 24,
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:'2%'
  }
});

export default GreyButton