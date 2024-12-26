import * as React from 'react';
import { View , StyleSheet ,Image, Text , TouchableOpacity, Button} from 'react-native';
import TextAnimation from '../animations/TextAnimation';
import GreyButton from '../components/GreyButton';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
    <Image source={require('../assets/little-lemon-logo.png')} style={styles.lemonLogo} />
    <View>
      <TextAnimation phrase={"Little Lemon , your local Mediterranean Bistro"} customTextStyle={styles.textStyle}/>
    </View>
    <GreyButton text={"Newsletter"} onPress={() => navigation.navigate('Subscribe')}/>
  </View>;
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },lemonLogo:{
    resizeMode: 'center',
    height: '50%',
    width: '50%',
  },textStyle:{
    fontSize: 24,
    color: "black",
    textAlign: "center",
    fontFamily: "Roboto",
    textAlign:'center',
    marginHorizontal:'5%'
  }
});

export default WelcomeScreen;
