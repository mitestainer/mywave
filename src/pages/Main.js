import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image, TextInput} from 'react-native'
import {FontAwesome, Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import ContentBox from '../components/ContentBox'
import Ad from '../components/Ad'
import { BorderlessButton } from 'react-native-gesture-handler'

const fotoRafael = require('../images/fotoRafael.png')
const wavesForecast = require('../images/wavesForecast.png')
const store1 = require('../images/store1.png')
const store2 = require('../images/store2.png')
const store3 = require('../images/store3.png')
const store4 = require('../images/store4.png')
const store5 = require('../images/store5.png')
const store6 = require('../images/store6.png')
const store7 = require('../images/store7.png')
const blogPost = require('../images/blogPost.png')
const premiumAd = require('../images/premiumAd.png')
const medina = require('../images/medina.png')

const Main = () => {
    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 37}}>
                {/* Top Card */}
                <View style={styles.topCard}>
                    <View style={styles.topCardUpper}>
                        <Text style={styles.topCardUpperText}>Sábado, Nov 24</Text>
                        <Text style={styles.topCardUpperText}>Min-Max:19-25°C</Text>
                    </View>
                    <View style={styles.topCardBottom}>
                        <View style={styles.topCardBottomWrapper}>
                            <Text style={styles.topCardBottomTextHi}>Olá Rafael,</Text>
                            <Text style={styles.topCardBottomTextAction}>Vamos checar a previsão das ondas?</Text>
                        </View>
                        <View style={styles.profilePitcureWrapper}>
                            <Image source={fotoRafael} style={{height: '100%', width: '100%'}} />
                        </View>
                    </View>
                </View>

                {/* Content */}

                {/* Favorite Beaches */}
                <ContentBox
                    title="Comece adicionando as suas praias favoritas"
                    actionText={<FontAwesome name="star" style={{color: '#2694BF'}} size={20} />}
                    action={() => navigator.navigate('Profile')}
                    style={{paddingTop: 16}}
                >
                    <View style={styles.searchBeachBox}>
                        <Feather name="map-pin" style={styles.mapPin} size={24} />
                        <TextInput style={styles.searchBeachInput} placeholder="Procurar" placeholderTextColor="#B4B4B4" />
                    </View>
                </ContentBox>

                {/* Forecast */}
                <ContentBox
                    title="Confira a previsão das ondas"
                    actionText="Ver todas"
                    action={() => navigator.navigate('ForecastNavigation')}
                >
                    <BorderlessButton onPress={() => navigator.navigate('ForecastNavigation')}>
                        <Image source={wavesForecast} />
                    </BorderlessButton>
                </ContentBox>

                {/* Store */}
                <ContentBox
                    title="Loja online"
                    actionText="Ver mais +"
                    action={() => navigator.navigate('Market')}
                >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={store1} style={{marginRight: 10}} />
                        <Image source={store2} style={{marginRight: 10}} />
                        <Image source={store3} style={{marginRight: 10}} />
                        <Image source={store4} style={{marginRight: 10}} />
                        <Image source={store5} style={{marginRight: 10}} />
                        <Image source={store6} style={{marginRight: 10}} />
                        <Image source={store7} />
                    </ScrollView>
                </ContentBox>

                {/* Blog */}
                <ContentBox
                    title="Blog do MyWave"
                    actionText="Ler mais +"
                    action={() => alert('goes to blog')}
                >
                    <BorderlessButton onPress={() => alert('goes to specific blog post')}>
                        <Image source={blogPost} />
                    </BorderlessButton>
                </ContentBox>

                {/* Ads */}
                <ContentBox>
                    <View style={styles.adsContainer}>
                        <Ad ad={premiumAd} url={() => navigator.navigate('Premium')} />
                        <Ad ad={medina} url={() => alert('goes to rip curl\'s website')} />
                    </View>
                </ContentBox>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topCard: {
        height: 200,
        backgroundColor: '#6CB7BF',
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 24,
        shadowColor: "rgba(123, 192, 195, 0.4)",
        shadowOpacity: 1,
        elevation: 3,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        paddingTop: 27,
        paddingHorizontal: 33
    },
    topCardUpper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 34
    },
    topCardUpperText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#F2F2F2'
    },
    topCardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topCardBottomWrapper: {
        width: 226
    },
    topCardBottomTextHi: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 26,
        color: '#FFFFFF'
    },
    topCardBottomTextAction: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        color: '#092B40'
    },
    profilePitcureWrapper: {
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 24,
        shadowColor: "rgba(8, 43, 64, 0.35)",
        shadowOpacity: 1,
        elevation: 3,
        borderWidth: 2,
        borderColor: '#fff',
        height: 68,
        width: 68,
        borderRadius: 68 / 2,
        overflow: 'hidden'
    },
    searchBeachBox: {
        height: 58,
        borderWidth: 1.5,
        borderColor: "#B4B4B4",
        borderStyle: "solid",
        borderRadius: 4,
        position: 'relative',
        justifyContent: 'center'
    },
    mapPin: {
        position: 'absolute',
        left: 25
    },
    searchBeachInput: {
        paddingLeft: 64,
        fontFamily: 'Roboto_400Regular',
        fontSize: 20
    },
    adsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Main