import React from 'react'
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import {Feather, FontAwesome} from '@expo/vector-icons'
import {RectButton} from 'react-native-gesture-handler'
import {BorderlessButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

import Ad from '../components/Ad'

const log2 = require('../images/log2.png')
const forecastExample1 = require('../images/forecastExample1.png')
const forecastExample2 = require('../images/forecastExample2.png')
const forecastExample3 = require('../images/forecastExample3.png')
const forecastExample4 = require('../images/forecastExample4.png')
const forecastAd = require('../images/marketAd.png')

const Forecast = () => {
    const navigator = useNavigation()

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                <RectButton style={{marginTop: 30}}>
                    <View style={styles.searchBox}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name="map-pin" size={24} color="#0C4459" />
                            <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 20, color: '#0C4459', marginLeft: 15}}>Praia Vermelha do Norte</Text>
                        </View>
                        <Feather name="chevron-down" color="#b4b4b4" size={18} />
                    </View>
                </RectButton>
                <View style={styles.forecastBox}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                        <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 20, color: '#092B40'}}>Praia Vermelha do Norte</Text>
                        <FontAwesome name="star" size={20} color="#2694BF" />
                    </View>
                    <Image source={log2} resizeMode={'contain'} />
                </View>
                <Image source={forecastExample1} style={{marginTop: 43}} />
                <Image source={forecastExample2} style={{marginTop: 25}} />
                <Image source={forecastExample3} style={{marginTop: 25}} />
                <View style={{marginTop: 40}}>
                    <Ad ad={forecastAd} url={() => alert('goes to volcom')} />
                </View>
                <Image source={forecastExample4} style={{marginTop: 25}} />
                <View style={styles.button}>
                    <BorderlessButton onPress={() => navigator.navigate('Beach')}>
                        <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: '#FFFFFF'}}>Veja o que já falaram dessa praia</Text>
                    </BorderlessButton>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        width: 334, 
        height: 58, 
        borderWidth: 1.5, 
        borderColor: "rgba(185, 191, 199, 0.75)", 
        borderStyle: "solid", 
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18
    },
    forecastBox: {
        width: 372,
        height: 335,
        backgroundColor: "#FFFFFF",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1,
        elevation: 3,
        borderRadius: 4,
        marginTop: 37,
        padding: 20,
        alignItems: 'center'
    },
    button: {
        width: 331,
        height: 61,
        backgroundColor: "#0C4459",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 20,
        shadowColor: "rgba(0, 0, 2, 0.25)",
        shadowOpacity: 1,
        elevation: 3,
        borderRadius: 38,
        marginTop: 30,
        marginBottom: 37,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Forecast