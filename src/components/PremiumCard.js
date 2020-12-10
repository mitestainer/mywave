import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const PremiumCard = ({num, text, style}) => {
    return (
        <View style={[styles.card, {backgroundColor: num % 2 === 0 ? '#0C303F' : '#2694BF'}, style]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.number}>{num}</Text>
                <Text style={styles.premium}>Premium</Text>
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={styles.content}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 162,
        height: 155,
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 12,
        shadowColor: "rgba(8, 43, 64, 0.55)",
        shadowOpacity: 1,
        elevation: 3,
        borderRadius: 8,
        padding: 10,
        marginRight: 8
    },
    number: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 28,
        color: '#FFFFFF',
        marginRight: 20
    },
    premium: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#88AABF',
        textTransform: 'uppercase'
    },
    content: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center'
    }
})

export default PremiumCard