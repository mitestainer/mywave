import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

const search = require('../images/search.png')

const Header = ({title, path, extended}) => {
    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={path ? () => navigator.navigate(path) : () => navigator.goBack()}>
                <Feather name="arrow-left" size={32} />
            </BorderlessButton>
            <Text style={styles.text}>{title}</Text>
            {extended && <View style={styles.headerWrapper}>
                <Image source={search} style={{marginRight: 14}} />
                <Feather name="help-circle" size={24} color="#0C4459" />
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        backgroundColor: "#fff"
    },
    text: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 22,
        color: '#0C4459',
        flex: 1,
        textAlign: 'center',
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})

export default Header