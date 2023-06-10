import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';

const Feedback = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstSection}>
        <Text style={styles.title}>Thrifty Thumbs</Text>
      </View>
      <View style={styles.secondSection}>
        <Text style={styles.subHeading}>
          Your Feedback is important to us, Contact Us.
        </Text>
      </View>
      <View style={styles.thirdSection}>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="black"
          style={styles.txtInput}
        />
        <TextInput
          placeholder="Enter Username"
          placeholderTextColor="black"
          style={styles.txtInput}
        />
        <TextInput
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Enter message here.."
          placeholderTextColor="black"
          style={styles.txtInput}
        />
      </View>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstSection: {
    marginTop: 13,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Product Sans Bold',
    fontSize: 30,
    color: '#472973',
  },
  secondSection: {
    marginVertical: 30,
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.8,
  },
  subHeading: {
    fontFamily: 'Product Sans Bold',
    color: '#EB7491',
  },
  thirdSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: Dimensions.get('screen').height * 0.3,
    marginTop: 50,
  },
  txtInput: {
    width: Dimensions.get('screen').width * 0.8,
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 30,
    padding: 10,
    borderColor: 'purple',
  },
});
