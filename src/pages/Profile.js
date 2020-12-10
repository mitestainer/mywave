import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import {RectButton, BorderlessButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import {Feather, FontAwesome} from '@expo/vector-icons'

const fotoRafael = require('../images/fotoRafael.png')
const cog = require('../images/icon-cog.png')
const iconUp = require('../images/icon-up.png')
const surfer = require('../images/icon-surfer.png')
const surfboard = require('../images/surfboard.png')
const surfing = require('../images/surfing.png')
const ribbon = require('../images/icon-ribbon.png')
const premiumAd = require('../images/premiumAdProfile.png')

const Profile = () => {
    const navigator = useNavigation()

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 18, color: '#88AABF', marginTop: 10}}>Plano Básico</Text>
                    <View style={styles.profilePitcureWrapper}>
                        <Image source={fotoRafael} />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 26, color: '#092B40'}}>Rafael Medeiros</Text>
                        <BorderlessButton onPress={() => navigator.navigate('Settings')} style={{height: 30, width: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={cog} style={{marginLeft: 8}} />
                        </BorderlessButton>
                    </View>
                    <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 18, color: '#092B40', marginTop: 8}}>38 anos, Ubatuba/SP</Text>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 228, height: 14, backgroundColor: '#F2F2F2', borderRadius: 100, marginBottom: 8}}></View>
                        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 14, color: '#092B40'}}>0 / 500.000</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingHorizontal: 40, justifyContent: 'space-between', marginTop: 40, marginBottom: 35}}>
                    <RectButton style={[styles.middleButton, {backgroundColor: '#2694BF'}]}>
                        <View style={styles.middleButtonInner}>
                            <Image source={iconUp} />
                            <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 14, color: '#fff', marginLeft: 5}}>Melhore seu plano</Text>
                        </View>
                    </RectButton>
                    <RectButton style={[styles.middleButton, {backgroundColor: '#0C303F'}]}>
                        <View style={styles.middleButtonInner}>
                            <Feather name="heart" color='#2694BF' size={14} />
                            <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 14, color: '#2694BF', marginLeft: 5}}>Convide seus amigos</Text>
                        </View>
                    </RectButton>
                </View>
                <View style={[styles.card, {marginBottom: 26}]}>
                    <Text style={styles.cardTitle}>Meu estilo</Text>
                    <View style={{flexDirection: 'row', marginTop: 28}}>
                        <Image source={surfer} />
                        <Text style={styles.myStyleText}>Domino as manobras</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Image source={surfboard} />
                        <Text style={styles.myStyleText}>Shortboard / 05’ 11”</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Image source={surfing} />
                        <Text style={styles.myStyleText}>Tubular / 2,5m +</Text>
                    </View>
                </View>
                <View style={[styles.card, {marginBottom: 18}]}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={styles.cardTitle}>Praias favoritas</Text>
                        <FontAwesome name="star" style={{color: '#2694BF'}} size={20} />
                    </View>
                    <RectButton style={{marginTop: 28}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Feather name="map-pin" size={24} />
                                <Text style={styles.myStyleText}>Praia Vermelha do Norte</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#B4B4B4" />
                        </View>
                    </RectButton>
                    <RectButton style={{marginTop: 15}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Feather name="map-pin" size={24} />
                                <Text style={styles.myStyleText}>Itamambuca</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#B4B4B4" />
                        </View>
                    </RectButton>
                    <RectButton style={{marginTop: 15}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Feather name="map-pin" size={24} />
                                <Text style={styles.myStyleText}>Praia do Félix</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#B4B4B4" />
                        </View>
                    </RectButton>
                </View>
                <View style={{paddingHorizontal: 21, alignItems: 'flex-end'}}>
                    <RectButton>
                        <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 14, color: '#2694BF'}}>Ver mais +</Text>
                    </RectButton>
                </View>
                <View style={styles.achievements}>
                    <Image source={ribbon} style={{marginRight: 17}} />
                    <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 20, color: '#B4B4B4'}}>Conquistas</Text>
                </View>
                <View style={{alignItems: 'center', marginBottom: 37}}>
                    <BorderlessButton onPress={() => navigator.navigate('Premium')}>
                        <Image source={premiumAd} />
                    </BorderlessButton>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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
        height: 92,
        width: 92,
        borderRadius: 92 / 2,
        overflow: 'hidden',
        marginVertical: 18
    },
    middleButton: {
        height: 48, 
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    middleButtonInner: {
        flexDirection: 'row', alignItems: 'center'
    },
    card: {
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        elevation: 4,
        marginHorizontal: 20,
        padding: 20
    },
    cardTitle: {
        fontFamily: 'Roboto_700Bold', 
        fontSize: 18,
        color: '#092B40'
    },
    myStyleText: {
        marginLeft: 14,
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        color: '#092B40'
    },
    achievements: {
        height: 58,
        borderWidth: 1.5,
        borderColor: "#B4B4B4",
        borderStyle: "solid",
        borderRadius: 4,
        marginHorizontal: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 24,
        marginTop: 29,
        marginBottom: 22
    }
})

export default Profile