import React from 'react'
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import {Feather, FontAwesome} from '@expo/vector-icons'
import {RectButton} from 'react-native-gesture-handler'

const log2 = require('../images/log2.png')

const Forecast = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView contentContainerStyle={{alignItems: 'center', flex: 1}}>
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
      }
})

export default Forecast