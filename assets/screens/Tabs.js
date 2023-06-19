import React from 'react';
import {View,Image,Dimensions } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ThriftyLog from './ThriftyLog';
import Account from './Account';
import Feedback from './Feedback';

const Tab = createBottomTabNavigator();
const Tabs = ({route}) => {
    return (
      <Tab.Navigator
        initialRouteName='home'
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              backgroundColor: '#EED7D2',
              position: 'absolute',
              // bottom: 5,
              // left: 20,
              // right: 20,
              elevation: 0,
              // borderRadius: 30,
              height: Dimensions.get('screen').height * 0.08,
              width:'100%',
              zIndex: 0,
            },
          ],
  
        }}>
        <Tab.Screen
          name="home"
          component={ThriftyLog}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{
                borderBottomWidth:10,
                borderStyle:'solid',
                borderBottomColor:focused ? '#C38DB8' : '#472973',
                width:'100%',
                alignItems:'center',
                paddingVertical:20}}>
                <Image
                  source={require('../images/Group23.png')}
                  style={{
                    // tintColor: focused ? 'black' : '#A5A4A4',
                    // width: Dimensions.get('screen').width * 0.05,
                    // height: Dimensions.get('screen').height * 0.03,
                    
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Feedback"
          component={Feedback}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{borderBottomWidth:10,
                borderStyle:'solid',
                borderBottomColor:focused ? '#C38DB8' : '#472973',
                width:'100%',
                alignItems:'center',
                paddingVertical:20}}>
                <Image
                  source={require('../images/Group24.png')}
                  style={{
                    // tintColor: focused ? 'black' : '#A5A4A4',
                    // width: Dimensions.get('screen').width * 0.05,
                    // height: Dimensions.get('screen').height * 0.03,
                  }}
                />
              </View>
            ),
          }}
        />
        {/* <Image source={require('../../images/tablogo.png')}/> */}
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{borderBottomWidth:10,
                borderStyle:'solid',
                borderBottomColor:focused ? '#C38DB8' : '#472973',
                width:'100%',
                alignItems:'center',
                paddingVertical:20}}>
                <Image
                  source={require('../images/Group22.png')}
                  style={{
                    // position: 'absolute',
                    alignSelf: 'center',
                  }}
                />
              </View>
            ),
          }}
        />
        {/* <Tab.Screen
          name="Event"
          component={Events}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../../images/tabcalender.png')}
                  style={{
                    tintColor: focused ? 'black' : '#A5A4A4',
                    width: Dimensions.get('screen').width * 0.05,
                    height: Dimensions.get('screen').height * 0.03,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Request"
          component={Request}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../../images/tabfriends.png')}
                  style={{
                    tintColor: focused ? 'black' : '#A5A4A4',
                    width: Dimensions.get('screen').width * 0.07,
                    height: Dimensions.get('screen').height * 0.03,
                  }}
                />
              </View>
            ),
          }}
        /> */}
      </Tab.Navigator>
    );
  };
  export default Tabs;