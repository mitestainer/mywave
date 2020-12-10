import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import {BorderlessButton, RectButton} from 'react-native-gesture-handler'

const welcome1 = require('../images/welcome1.png')

const list = [
    {
        title: 'Ondas',
        text: 'Vamos ver qual a previsão das ondas?'
    },
    {
        title: 'Ondas',
        text: 'Vamos ver qual a previsão das ondas?'
    }
]

const Block = ({data}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'space-between',  marginBottom: 40, backgroundColor: '#b4d455', flex: 1}}>
            <View style={styles.imageWrapper}>
                <Image source={welcome1} />
            </View>
            <Text style={styles.welcomeTitle}>{data.title}</Text>
            <Text style={styles.welcomeText}>{data.text}</Text>
            <View style={{width: 75, justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
            </View>
        </View>
    )
}

const Welcome = () => {
    const [blockIndex, setBlockIndex] = useState(0)
    return (
        <View style={styles.container}>
            <BorderlessButton style={{marginLeft: 33, marginBottom: 30, alignSelf: 'flex-start'}}>
                <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 22, color: '#0C4459'}}>Pular</Text>
            </BorderlessButton>
            <FlatList 
                data={list}
                style={{flex: 1, backgroundColor: 'pink' }}
                renderItem={({ item }) => {
                  return <Block data={item} />;
                }}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <View style={styles.button} >
                <RectButton style={styles.buttonFixer} onPress={() => alert('go to payment')}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </RectButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(123, 192, 195, 0.35)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 67,
        paddingTop: 55
    },
    imageWrapper: {
        width: 217,
        height: 217,
        backgroundColor: "#FFFFFF",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 24,
        shadowColor: "rgba(123, 192, 195, 0.85)",
        shadowOpacity: 1,
        elevation: 3,
        borderRadius: 217 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeTitle: {
        fontFamily: 'Roboto_700Bold', 
        fontSize: 30,
        color: '#0C4459',
        textAlign: 'center'
    },
    welcomeText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#0C4459'
    },
    circle: {
        width: 15,
        height: 15,
        backgroundColor: '#0C4459',
        borderRadius: 15 / 2
    },
    button: {
        borderRadius: 38,
        height: 60,
        width: 280,
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 24,
        shadowColor: "rgba(0, 0, 2, 0.45)",
        shadowOpacity: 1,
        elevation: 3,
        backgroundColor: '#FFF'
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 17,
        fontFamily: 'Roboto_500Medium',
        color: '#0C4459'
    },
    buttonFixer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Welcome