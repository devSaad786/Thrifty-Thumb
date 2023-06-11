import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Otp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../images/logo.png')} />
          <StatusBar style="auto" />
          <View>
            <Text style={styles.title}>Enter OTP</Text>
          </View>
          <View>
            <OTPInputView
              style={{width: '60%', height: 200}}
              pinCount={4}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.center}>
            <TouchableOpacity>
              <Text style={styles.forgot_button}>Back To Login?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:'black',
    fontFamily: 'Product Sans Bold',
    fontSize: 20,
    fontWeight:'600'
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: 'black',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    color: 'black',
    backgroundColor: 'black'
  },

  underlineStyleHighLighted: {
    borderColor: 'blue',
    color: 'black',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
    backgroundColor: 'black',
    color: 'black',
  },

  borderStyleHighLighted: {
    color: 'black',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: 'blue',
    color: 'black',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: Dimensions.get('screen').width * 0.7,
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    width: Dimensions.get('screen').width * 0.7,
    padding: 10,
    marginLeft: 20,
    fontFamily: 'Product Sans Bold',
  },
  forgot_button: {
    height: 30,
    textDecorationLine: 'underline',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    backgroundColor: '#5F6587',
  },
  loginText: {
    fontFamily: 'Product Sans Bold',
    color: 'white',
  },
  center: {
    width: Dimensions.get('screen').width * 0.7,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
