import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import StoreSection from '../components/StoreSection'
import Ad from '../components/Ad'

const storeLogo = require('../images/storeLogo.png')
const search = require('../images/search.png')
const cart = require('../images/cart.png')
const marketAd = require('../images/marketAd.png')
const premiumAd = require('../images/premiumAdProfile.png')

const products = {
    female: [
        {
            picture: require('../images/feminino1.png'),
            title: 'Camiseta de Lycra ROXY',
            price: 399.9
        },
        {
            picture: require('../images/feminino2.png'),
            title: 'Camiseta de Lycra ROXY',
            price: 299.9
        },
        {
            picture: require('../images/feminino3.png'),
            title: 'BIQUINI RIP CURL PARADISE BAY UP',
            price: 189.9
        },
        {
            picture: require('../images/feminino4.png'),
            title: 'Camiseta de Lycra ROXY',
            price: 499.9
        },
        {
            picture: require('../images/feminino5.png'),
            title: 'Camiseta BILLABONG',
            price: 199.9
        }
    ],
    male: [
        {
            picture: require('../images/masculino1.png'),
            title: 'LONG JOHN RIP CURL DWP 3/2 CZ GB',
            price: 1999.9
        },
        {
            picture: require('../images/masculino2.png'),
            title: 'MOLETOM RIP CURL LIVE ICON STRIPE',
            price: 239.9
        },
        {
            picture: require('../images/masculino3.png'),
            title: 'BERMUDA RIP CURL VIDASOUL COMBINED',
            price: 199.9
        },
        {
            picture: require('../images/masculino4.png'),
            title: 'Camiseta de Lycra Rip Curl Waves S/SL UV',
            price: 249.9
        },
        {
            picture: require('../images/masculino5.png'),
            title: 'BERMUDA RIP CURL VIDASOUL COMBINED',
            price: 299.9
        }
    ],
    accessories: [
        {
            picture: require('../images/acessorios1.png'),
            title: 'Prancha De Surf M1 1 Model- Sci - Fi',
            price: 1695.9
        },
        {
            picture: require('../images/acessorios2.png'),
            title: 'CAPA DE PRANCHA DAY COVER 7\'2E',
            price: 799.9
        },
        {
            picture: require('../images/acessorios3.png'),
            title: 'Quilha DE SURF 4,5" PRETO AZUL 900',
            price: 199.9
        },
        {
            picture: require('../images/acessorios4.png'),
            title: 'CAPA DE PRANCHA DAY COVER 7\'2',
            price: 849.9
        },
        {
            picture: require('../images/acessorios5.png'),
            title: 'Prancha De Surf Até 7.0 Hypto Crypt',
            price: 1680.9
        }
    ]
}

const Market = () => {
    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <BorderlessButton onPress={() => navigator.goBack()}>
                        <Feather name="arrow-left" size={32} />
                    </BorderlessButton>
                    <Image source={storeLogo} />
                    <View style={styles.headerWrapper}>
                        <Image source={search} style={{marginRight: 14}} />
                        <Image source={cart} />
                    </View>
                </View>
                <View style={styles.storeWrapper}>
                    <View style={styles.ourProducts}>
                        <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 24, color: '#092B40'}}>Nossos produtos</Text>
                        <BorderlessButton>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 14, color: '#092B40'}}>Filtro</Text>
                                <Feather name="filter" size={20} style={{marginLeft: 13}} />
                            </View>
                        </BorderlessButton>
                    </View>
                </View>
                <StoreSection sector="Feminino" products={products.female} />
                <View style={styles.line} />
                <StoreSection sector="Masculino" products={products.male} />
                <View style={styles.line} />
                <View style={{alignItems: 'center', marginVertical: 37}}>
                    <BorderlessButton onPress={() => navigator.navigate('Premium')}>
                        <Image source={premiumAd} />
                    </BorderlessButton>
                </View>
                <View style={styles.line} />
                <StoreSection sector="Acessórios" products={products.accessories} />
                <View style={styles.line} />
                <View style={styles.adsContainer}>
                    <Ad ad={marketAd} url={() => alert('goes to volcom')} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingTop: 50,
        flexDirection: 'row',
        backgroundColor: "#fff"

    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ourProducts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    storeWrapper: {
        paddingHorizontal: 33,
        paddingTop: 38
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 33
    },
    adsContainer: {
        paddingHorizontal: 33,
        marginTop: 36,
        marginBottom: 44
    }
})

export default Market