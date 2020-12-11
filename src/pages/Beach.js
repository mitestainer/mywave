import React from 'react'
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import {Feather, FontAwesome} from '@expo/vector-icons'
import {RectButton} from 'react-native-gesture-handler'
import {BorderlessButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

import Ad from '../components/Ad'

const surfing = require('../images/surfing.png')
const beach1 = require('../images/beach1.png')
const beach2 = require('../images/beach2.png')
const beach3 = require('../images/beach3.png')

const data = [
    {
        user: require('../images/user1.png'),
        name: 'Matheus Mitestainer',
        location: 'São Paulo, Brasil',
        title: 'Pico irado para surfar!',
        text: 'Praia limpa, altas ondas e fácil acesso para ir de carro.'
    },
    {
        user: require('../images/user2.png'),
        name: 'Bruno Reche',
        location: 'Ubatuba, Brasil',
        title: 'A melhor praia de Ubatuba!',
        text: 'Altas ondas, o vento estava perfeito e é  melhor pico para ver o pôr do sol.'
    },
    {
        user: require('../images/user3.png'),
        name: 'Karen Dinalli',
        location: 'Minas Gerais, Brasil',
        title: 'Praia muito limpa!',
        text: 'Um sonho surfar em uma praia tão linda, limpa e com uma atmosfera incrível.'
    }
]

const Beach = () => {
    const navigator = useNavigation()

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 18}}>
                <RectButton style={{marginTop: 30}}>
                    <View style={styles.searchBox}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name="map-pin" size={24} color="#0C4459" />
                            <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 20, color: '#0C4459', marginLeft: 15}}>Praia Vermelha do Norte</Text>
                        </View>
                        <Feather name="chevron-down" color="#b4b4b4" size={18} />
                    </View>
                </RectButton>
                <View style={{width: '100%', paddingHorizontal: 40, marginTop: 33, marginBottom: 13}}>
                    <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                        <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 20, color: '#092B40', marginBottom: 20}}>Ubatuba, Brasil</Text>
                        <FontAwesome name="star" size={20} color="#2694BF" />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={surfing} />
                        <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 16, color: '#2694BF', marginLeft: 15}}>125 comentários</Text>
                    </View>
                </View>
                <View style={{position: 'relative', height: 135, marginBottom: 23}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={[styles.beachCard, {marginLeft: 40}]}>
                            <Image source={beach1} />
                        </View>
                        <View style={[styles.beachCard, {marginLeft: 12}]}>
                            <Image source={beach2} />
                        </View>
                        <View style={[styles.beachCard, {marginLeft: 12, marginRight: 40}]}>
                            <Image source={beach3} />
                        </View>
                    </ScrollView>
                    <View style={{width: 53, height: 22, backgroundColor: "rgba(38, 148, 191, 0.8)", borderRadius: 16, position: 'absolute', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', left: 15, marginLeft: 40, bottom: 15}}>
                        <Feather name="camera" size={13} color="#fff" />
                        <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 14, color: '#FFFFFF', marginLeft: 2}}>190</Text>
                    </View>
                </View>
                <View>
                    {data.map((opinion, index) => {
                        return (
                            <View style={styles.opinionCard} key={index}>
                                <View style={{flexDirection: 'row', marginBottom: 21}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Image source={opinion.user} />
                                        <View style={{flexDirection: 'row', marginTop: 10}}>
                                            <FontAwesome name="star" size={8} color="#2694BF" />
                                            <FontAwesome name="star" size={8} color="#2694BF" />
                                            <FontAwesome name="star" size={8} color="#2694BF" />
                                            <FontAwesome name="star" size={8} color="#2694BF" />
                                            <FontAwesome name="star" size={8} color="#2694BF" />
                                        </View>
                                    </View>
                                    <View style={{marginLeft: 12}}>
                                        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 13, color: '#0C4459', marginBottom: 3}}>{opinion.name}</Text>
                                        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 10, color: '#9A9A9A', marginBottom: 2}}>Escreveu um comentário em Oct, 2020</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Feather name="map-pin" color="#B4B4B4" size={10} />
                                            <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12, color: '#9A9A9A', marginLeft: 4}}>{opinion.location}</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 18, color: '#092B40'}}>{opinion.title}</Text>
                                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 15, color: '#0C4459', marginTop: 10}}>{opinion.text}</Text>
                            </View>
                        )
                    })}
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
    beachCard: {
        borderRadius: 6,
        overflow: 'hidden',
        height: 133,
        width: 334,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1,
        elevation: 2
    },
    opinionCard: {
        width: 334,
        height: 200,
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
        padding: 26,
        marginBottom: 23
    }
})

export default Beach