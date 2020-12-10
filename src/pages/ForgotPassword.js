import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import Button from '../components/Button'
import {useNavigation} from '@react-navigation/native'

const ForgotPassowrd = () => {
    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Insira seu e-mail abaixo e enviaremos um link para redefinir sua senha.</Text>
            <TextInput 
                style={styles.inputBox} 
                placeholder="Email" 
                placeholderTextColor="#B4B4B4"
                keyboardType="email-address"
             />
            <Button text="Enviar" buttonStyle={styles.button} action={() => navigator.navigate('ResetPasswowrdSuccess')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    text: {
        marginTop: 64,
        marginBottom: 24,
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#0C4459'
    },
    inputBox: {
        width: 334,
        height: 58,
        borderWidth: 1,
        borderColor: "rgba(185, 191, 199, 0.55)",
        borderStyle: "solid",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        marginBottom: 24,
        paddingHorizontal: 20,
        fontSize: 20,
        fontFamily: 'Roboto_400Regular',
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
        borderBottomLeftRadius: 100
    }
})

export default ForgotPassowrd