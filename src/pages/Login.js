import React from 'react'
import {View, TextInput, StyleSheet, Text} from 'react-native'
import Button from '../components/Button'
import {FontAwesome} from '@expo/vector-icons'
import {RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

const Login = () => {
    const signInFacebook = () => alert('fb')
    const signInGoogle = () => alert('google')

    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <TextInput style={styles.inputBox} placeholder="Email" placeholderTextColor="#b4b4b4" />
                <TextInput style={styles.inputBox} placeholder="Senha" placeholderTextColor="#b4b4b4" />
                <Button text="Entrar" buttonStyle={styles.button} action={() => navigator.navigate('App')} />
                <Text style={styles.forgot} onPress={() => navigator.navigate('ForgotPassword')}>Esqueceu sua senha?</Text>
            </View>
            <View style={styles.under}>
                <View style={styles.buttonSocial} >
                    <RectButton style={styles.buttonSocialFixer} onPress={signInFacebook}>
                        <FontAwesome name="facebook" size={16} />
                        <Text style={styles.buttonSocialText}>Criar usando o Facebook</Text>
                    </RectButton>
                </View>
                <View style={styles.buttonSocial} >
                    <RectButton style={styles.buttonSocialFixer} onPress={signInGoogle}>
                        <FontAwesome name="google" size={16} />
                        <Text style={styles.buttonSocialText}>Criar usando o Google</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    upper: {
        alignItems: 'center',
        marginTop: 64
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
        paddingLeft: 22,
        fontFamily: 'Roboto_400Regular', 
        fontSize: 20, 
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
    },
    buttonSocial: {
        borderRadius: 38,
        height: 60,
        width: 280,
        borderColor: '#082B40',
        borderWidth: 1.5,
        marginTop: 24
    },
    buttonSocialText: {
        fontWeight: '500',
        fontSize: 18,
        color: '#0C4459',
        fontFamily: 'Roboto_500Medium',
        marginLeft: 13
    },
    buttonSocialFixer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    forgot: {
        fontFamily: 'Roboto_500Medium',
        fontWeight: '500',
        fontSize: 22,
        color: '#0C4459',
        textDecorationLine: 'underline',
        marginTop: 64
    },
    under: {
        alignItems: 'center',
        marginBottom: 75
    },
    social: {
        borderWidth: 1.5,
        borderColor: '#082B40',
        marginTop: 24
    }
})

export default Login