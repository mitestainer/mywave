import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {RectButton, BorderlessButton} from 'react-native-gesture-handler'

const Button = ({buttonStyle, action, text}) => {
    return (
        <View style={[styles.button, buttonStyle]} >
            <BorderlessButton style={styles.buttonFixer} onPress={action}>
                <Text style={[styles.buttonText, {color: buttonStyle.backgroundColor === "#0C4459" ? '#fff' : '#0C4459'}]}>{text}</Text>
            </BorderlessButton>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 38,
        height: 60,
        width: 280
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 22,
        color: '#0C4459',
        fontFamily: 'Roboto_500Medium'
    },
    buttonFixer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Button