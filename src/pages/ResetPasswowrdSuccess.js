import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import Button from '../components/Button'
import {useNavigation} from '@react-navigation/native'

const logo = require('../images/logo.png')

const ResetPasswordSuccess = () => {
    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.bold}>Obrigado!</Text>
            <Text style={styles.text}>Por favor, verifique seu e-mail.</Text>
            <Button text="Login" buttonStyle={styles.button} action={() => navigator.navigate('Login')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    logo: {
        height: 276,
        width: 230,
        marginTop: 46,
        marginBottom: 68
    },
    bold: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 28,
        color: '#0C4459'
    },
    text: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 22,
        color: '#0C4459'
    },
    button: {
        backgroundColor: "#0C4459",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.35)",
        shadowOpacity: 1,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        marginTop: 32
    }
})

export default ResetPasswordSuccess