import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'

const Ad = ({ad, url}) => {
    return (
        <BorderlessButton onPress={url}>
            <View>
                <Text style={styles.advertText}>Advert</Text>
                <Image source={ad} />
            </View>
        </BorderlessButton>
    )
}

const styles = StyleSheet.create({
    advertText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 10,
        color: '#B4B4B4',
        marginBottom: 5
    }
})

export default Ad