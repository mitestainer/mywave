import React from 'react'
import {View, ImageBackground, Text, Image, StyleSheet} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native'

import Button from '../components/Button'

const onboardImage = require('../images/onboardImage.png')
const logo = require('../images/logo.png')


const Onboard = () => {
    const navigation = useNavigation()
    
    const goToSignup = () => navigation.navigate('Signup')
    const goToLogin = () => navigation.navigate('Login')

    return (
        <View style={styles.container}>
            <ImageBackground source={onboardImage} style={styles.waves}>
            <LinearGradient 
                colors={['rgba(81, 157, 165, 0.4225)', 'rgba(255, 255, 255, 0.5525)']} 
                locations={[0.4225, 0.5525]} 
                
                style={styles.gradient} 
            />
                <View style={styles.logoWrapper}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View>
                    <Button buttonStyle={styles.signUpButton} action={goToSignup} text="Criar uma conta" />
                    <Button buttonStyle={styles.loginButton} action={goToLogin} text="Entrar" />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    waves: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 75,
        paddingHorizontal: 65
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    logoWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        height: 276,
        width: 230
    },
    signUpButton: {
        backgroundColor: '#FFFFFF',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 24,
        shadowColor: "rgba(8, 43, 64, 0.55)",
        shadowOpacity: 1,
        marginBottom: 24
    },
    loginButton: {
        borderColor: '#fff',
        borderWidth: 2,
        borderStyle: 'solid'
    }
})

export default Onboard