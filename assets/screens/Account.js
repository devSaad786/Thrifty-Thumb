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
  Pressable
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Account = () => {
  const [display,setDisplay] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.background}>
          <View >
            <Text style={styles.heading}>My Account</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.heading2}>Muhammad Faaiz</Text>
            <View style={styles.Subhead}>
              <Text style={styles.subheading}>Current Log</Text>
              <Text style={styles.subheading}>History Log</Text>
            </View>
            <View style={styles.Subhead}>
              <Text style={styles.subheading2}>$69.69</Text>
              <Text style={styles.subheading2}>$420.20</Text>
            </View>
          </View>
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.bars}>
            <Feather style={styles.icon} name="thermometer" color={'#003E58'} size={28}/>
              <Text style={[{
                marginLeft:10
              },styles.option]}>Collections</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setDisplay(!display)} style={styles.bars}>
              <Feather style={styles.icon} name="settings" color={'#003E58'} size={28}/>
              <Text style={[{
                marginLeft:10
              },styles.option]}>Settings</Text>
            </TouchableOpacity>
            {display && (
              <>
              <TouchableOpacity style={styles.subbars}>
              <MaterialIcons style={styles.icon} name='privacy-tip' color={'#003E58'} size={29}/>
              <Text style={[{
                marginLeft:10
              },styles.option]}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subbars}>
            <Feather style={styles.icon} name="shield" color={'#003E58'} size={29}/>
            <Text style={[{marginLeft:10},styles.option]}>Change Password</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.subbars}>
            <MaterialCommunityIcons style={styles.icon} name='theme-light-dark' color={'#003E58'} size={29}/>
            <Text style={[{marginLeft:10},styles.option]}>Dark Mode</Text>
          </TouchableOpacity>
          </>
            )}
            <TouchableOpacity style={styles.bars}>
            <Feather style={styles.icon} name="log-out" color={'#003E58'} size={28}/>
              <Text style={[{marginLeft:10},styles.option]}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Account


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EED7D2',
  },
  background: {
    paddingTop: 40,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Product Sans Bold',
    fontSize: 30,
    marginBottom: 10,
    color: '#336699'
  },
  info: {
    backgroundColor: '#003E58',
    borderRadius: 25,
    width: '98%',
    height: 230,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  Subhead: {
    display: 'flex',
    width: Dimensions.get('screen').width * 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center'
  },
  heading2: {
    fontFamily: 'Product Sans Bold',
    fontSize: 20,
    color: '#999999',
    textAlign: 'center',
    marginTop: 30

  },
  subheading: {
    marginTop: 30,
    fontFamily: 'Product Sans Regular',
    fontSize: 18,
    color: '#C38DB8',

  },
  subheading2: {
    marginTop: 30,
    fontFamily: 'Product Sans Regular',
    fontSize: 18,
    color: '#74EBB2',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.4
  },

  bars: {
    backgroundColor: 'white',
    // paddingVertical: 0,
    marginVertical: 3,
    width: '98%',
    height: 45,
    // alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',

  },
  subbars:{
    backgroundColor: '#F8F8FF',
    // paddingVertical: 0,
    marginVertical: 3,
    width: '92%',
    height: 45,
    // alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  option: {
    textAlign: 'left',
    fontFamily: 'Product Sans Bold',
    fontSize: 18,
    // marginLeft: 0,
    marginTop: 11,
    color: '#003E58'
  },
  image: {
    // display: 'flex',
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 5,
    marginTop: 7
  },
  bottom: {
    height: 5,
    width: '33.3333%',
    backgroundColor: '#472973',
  },
  bottom_selected: {
    height: 5,
    width: '33.3333%',
    backgroundColor: '#C38DB8',

  },
  icon:{
    alignSelf: 'center',
    marginLeft: 5
  }
});