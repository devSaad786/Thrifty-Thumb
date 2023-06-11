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
  ImageBackground,
} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.bg}
      source={require('../images/loginbg.png')}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Thrifty Thumbs</Text>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('../images/logo.png')}
            />
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
            <TouchableOpacity
              style={[styles.loginBtn, {backgroundColor: '#5F6587'}]}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginBtn, {backgroundColor: '#003E58'}]}>
              <Text style={styles.loginText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginBtn, {backgroundColor: '#472973'}]}>
              <Text style={styles.loginText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
  },
  bg: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
  },
  title: {
    top: 30,
    marginTop: 30,
    color: '#336699',
    fontWeight: '600',
    fontFamily: 'Product Sans Bold',
    fontSize: 30,
    textAlign: 'center',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: Dimensions.get('screen').width * 0.8,
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    width: Dimensions.get('screen').width * 0.8,
    padding: 10,
    marginLeft: 20,
    fontFamily: 'Product Sans Bold',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginText: {
    fontFamily: 'Product Sans Bold',
    color: 'white',
  },
  center: {
    width: Dimensions.get('screen').width * 0.9,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
