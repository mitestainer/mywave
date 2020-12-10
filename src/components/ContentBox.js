import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'

const ContentBox = ({children, title, actionText, action, style}) => {
    return (
        <View style={[style, styles.contentBox]}>
            {title && <View style={styles.upperContentBox}>
                <Text style={styles.contentBoxTitle}>{title}</Text>
                <BorderlessButton onPress={action}>
                    <Text style={styles.contentBoxButtonText}>{actionText}</Text>
                </BorderlessButton>
            </View>}
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    contentBox: {
        paddingHorizontal: 30,
        marginTop: 27
    },
    upperContentBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    contentBoxTitle: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 18,
        color: '#092B40',
        width: 240
    },  
    contentBoxButtonText: {
        color: '#2694BF',
        fontSize: 14,
        fontFamily: 'Roboto_500Medium'
    }
})

export default ContentBox