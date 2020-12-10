import React, {useState} from 'react'
import {View, ImageBackground, Text, Image, StyleSheet, ScrollView} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import Button from '../components/Button'
import PremiumCard from '../components/PremiumCard'

const premiumBackground = require('../images/premiumBackground.png')
const logo = require('../images/logo.png')

const perks = ['Sem anúncios.', 'Diário de Bordo com relatório mensal.', 'As melhores opções de surf para o dia.', 'O melhor do mundo do surf na suas mãos.']

const Premium = () => {
    const navigation = useNavigation()
    
    const goToSignup = () => navigation.navigate('Signup')
    const goToLogin = () => navigation.navigate('Login')

    const [plan, setPlan] = useState(null)

    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={premiumBackground} style={styles.waves}>
                    <LinearGradient 
                        colors={['rgba(0, 0, 2, 0.45)', 'rgba(0, 0, 2, 0)']} 
                        locations={[0.7344, 0.8798]} 
                        style={styles.gradient} 
                    />
                    <BorderlessButton style={{width: 30, height: 30, alignSelf: 'flex-end', marginRight: 40}} onPress={(() => navigation.goBack())}>
                        <Feather name="x" color="#fff" size={30} />
                    </BorderlessButton>
                    <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 38, color: '#FFFFFF', marginHorizontal: 66, marginVertical: 50, textAlign: 'center'}}>As vantagens de ser <Text style={{fontFamily: 'Roboto_700Bold'}}>Premium</Text></Text>
                    <View style={{width: '100%', marginBottom: 56}}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {perks.map((perk, i) => <PremiumCard key={`perk_${i}`} num={i + 1} text={perk} style={i=== 0 && {marginLeft: 40} || i === 3 && {marginRight: 40}} />)}
                        </ScrollView>
                    </View>
                    <View style={[styles.button, {backgroundColor: '#fff'}]} >
                        <RectButton style={styles.buttonFixer} onPress={() => alert('goes to payment')}>
                            <Text style={[styles.buttonText, {color: '#0C4459'}]}>Experimente grátis por 30 dias</Text>
                        </RectButton>
                    </View>
                    <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 13, color: '#FFFFFF', textAlign: 'center', width: 250, marginTop: 20}}>
                        Experimente o <Text style={{fontFamily: 'Roboto_700Bold'}}>MyWave</Text> por 30 dias grátis. Enviaremos um lembrete por email
                        3 dias antes de seu mês grátis terminar. <Text style={{fontFamily: 'Roboto_700Bold', textDecorationLine: 'underline'}}>Consulte os termos e condições.</Text>
                    </Text>
                    <View style={{backgroundColor: '#fff', width: '100%', alignItems: 'center', paddingHorizontal: 32, paddingVertical: 28, marginTop: 28}}>
                        <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 24, color: '#092B40', marginBottom: 28}}>Confira os nossos planos</Text>
                        <BorderlessButton onPress={() => setPlan(1)}>
                            <View style={[styles.priceCard, {marginBottom: 14}]}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Feather name={plan === 1 ? "check-circle" : "circle"} color={plan === 1 ? "#1CCD78" : "#b4b4b4"} size={28} />
                                    <View style={{marginLeft: 10}}>
                                        <Text style={styles.planName}>Plano Anual</Text>
                                        <Text style={styles.planNameUnder}>Paga R$185.88 por ano</Text>
                                    </View>
                                </View>
                                <Text style={[styles.price, {color: plan === 1 ? '#092B40' : '#88AABF'}]}>R$ 10,90</Text>
                            </View>
                        </BorderlessButton>
                        <BorderlessButton onPress={() => setPlan(2)}>
                            <View style={styles.priceCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Feather name={plan === 2 ? "check-circle" : "circle"} color={plan === 2 ? "#1CCD78" : "#b4b4b4"} size={28} />
                                    <View style={{marginLeft: 10}}>
                                        <Text style={styles.planName}>Plano Mensal</Text>
                                        <Text style={styles.planNameUnder}>Plano pago por mês</Text>
                                    </View>
                                </View>
                                <Text style={[styles.price, {color: plan === 2 ? '#092B40' : '#88AABF'}]}>R$ 12,90</Text>
                            </View>
                        </BorderlessButton>
                        <View style={[styles.button, {backgroundColor: '#0C4459', marginTop: 24}]} >
                            <RectButton style={styles.buttonFixer} onPress={() => alert('goes to payment')}>
                                <Text style={[styles.buttonText, {color: '#fff'}]}>Pagar</Text>
                            </RectButton>
                        </View>
                        <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 13, color: '#092B40', textDecorationLine: 'underline', marginTop: 16}}>Consulte os termos e condições.</Text>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    waves: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        position: 'relative',
        flex: 1
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    button: {
        borderRadius: 38,
        height: 60,
        width: 280,
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 24,
        shadowColor: "rgba(0, 0, 2, 0.45)",
        shadowOpacity: 1,
        elevation: 3
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 17,
        fontFamily: 'Roboto_500Medium'
    },
    buttonFixer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceCard: {
        width: 350,
        height: 100,
        backgroundColor: "#FFFFFF",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 40
    },
    planName: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        color: '#092B40'
    },
    planNameUnder: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        color: '#88AABF'
    },
    price: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 20
    }
})

export default Premium