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

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../images/logo.png')} />
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.center}>
            <TouchableOpacity>
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgot_button}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: 'Product Sans Bold'
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
    marginTop: 40,
    backgroundColor: '#5F6587',
  },
  loginText:{
    fontFamily: 'Product Sans Bold',
    color: 'white'
  },
  center: {
    width: Dimensions.get('screen').width * 0.7,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
