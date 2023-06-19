import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import React from 'react';
import {BarChart}from "react-native-chart-kit";
import * as Progress from 'react-native-progress';


const ThriftyLog = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.background}>
                    <View>
                        <Text style={styles.heading}>My Thrifty Log</Text>
                    </View>
                    <View style={styles.info}>
                         <BarChart
                         data={data}
                         width={Dimensions.get('window').width * 0.75}
                         height={180}
                         chartConfig = {{
                            backgroundGradientFrom: "#003E58",
                            backgroundGradientFromOpacity: 1,
                            backgroundGradientTo: "#003E58",
                            backgroundGradientToOpacity: 1,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            strokeWidth: 2, // optional, default 3
                            barPercentage: 0.5,
                            useShadowColorFromDataset: false, // optional
                          }}
                         />
                    </View>
                </View>
                <View style={styles.background}>
                    <View>
                        <Text style={styles.heading}>My Collection</Text>
                    </View>
                    <View style = {styles.info2}>
                        <View style={styles.bar}>
                            <View style={styles.imageBar}>
                                <Image source={require('../images/Group151.png')}/>
                            </View>
                            <View style={styles.mainInfo}>
                                <View style={styles.progressInfo}>
                                    <Text style={styles.infoText}>Shopping</Text>
                                    <Text style={styles.infoText}>$3,000/$10,000</Text>
                                </View>
                                <Progress.Bar progress={0.3} width={200} color={'#C38DB8'} unfilledColor={'#FFFFFF'}/>
                            </View>
                        </View>
                        <View style={styles.bar}>
                            <View style={styles.imageBar}>
                                <Image source={require('../images/Group177.png')}/>
                            </View>
                            <View style={styles.mainInfo}>
                                <View style={styles.progressInfo}>
                                    <Text style={styles.infoText}>Bills & Utilities</Text>
                                    <Text style={styles.infoText}>$241/$250</Text>
                                </View>
                                <Progress.Bar progress={241/250} width={200} color={'#C38DB8'} unfilledColor={'#FFFFFF'}/>
                            </View>
                        </View>
                        <View style={styles.bar}>
                            <View style={styles.imageBar}>
                                <Image source={require('../images/Group178.png')}/>
                            </View>
                            <View style={styles.mainInfo}>
                                <View style={styles.progressInfo}>
                                    <Text style={styles.infoText}>Healthcare</Text>
                                    <Text style={styles.infoText}>$1,541/$52,000</Text>
                                </View>
                                <Progress.Bar progress={1531/52000} width={200} color={'#C38DB8'} unfilledColor={'#FFFFFF'}/>
                            </View>
                        </View>
                        <View style={styles.bar}>
                            <View style={styles.imageBar}>
                                <Image source={require('../images/Group179.png')}/>
                            </View>
                            <View style={styles.mainInfo}>
                                <View style={styles.progressInfo}>
                                    <Text style={styles.infoText}>Food</Text>
                                    <Text style={styles.infoText}>$141/$1,000</Text>
                                </View>
                                <Progress.Bar progress={141/1000} width={200} color={'#C38DB8'} unfilledColor={'#FFFFFF'}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ThriftyLog

const data = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat","Sun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43,5]
      }
    ]
  };

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
        width: Dimensions.get('screen').width * 0.80,
        height: 250,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    info2: {
        backgroundColor: '#472973',
        borderRadius: 25,
        width: Dimensions.get('screen').width * 0.80,
        height: 250,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    bar:{
        flexDirection:'row',
        paddingTop:10
    },
    mainInfo:{
        paddingLeft:10
    },
    progressInfo:{
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between',
        paddingBottom:5,
    },
    infoText:{
        fontSize:11
    }
})