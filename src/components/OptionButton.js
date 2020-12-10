import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

const OptionButotn = ({icon, text, onPress}) => {
    return (
        <View style={{marginBottom: 22}}>
            <RectButton onPress={onPress}>
                <View style={styles.option}>
                    {icon}
                    <Text style={styles.optionText}>{text}</Text>
                </View>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    option: {
        height: 58,
        borderWidth: 1.5,
        borderColor: "#B4B4B4",
        borderStyle: "solid",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 18
    },
    optionText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        color: "#0C4459",
        marginLeft: 16
    }
})

export default OptionButotn