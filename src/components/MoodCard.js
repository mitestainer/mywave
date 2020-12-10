import React, { useState } from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import Slider from '@react-native-community/slider'

const track = require('../images/track.png')

const MoodCard = ({type}) => {
    const [value, setValue] = useState(0)

    let topText = ''
    let icon0 = ''
    let icon100 = ''

    switch (type) {
        case 'mood':
            topText = 'Qual foi o seu mood antes de surfar?'
            icon0 = require('../images/angryFace.png')
            icon100 = require('../images/smiley.png')
            break;
        case 'sleep':
            topText = 'Como foi a sua última noite de sono?'
            icon0 = require('../images/asleepFace.png')
            icon100 = require('../images/sleepFace.png')
            break;
        case 'food':
            topText = 'Como está a sua alimentação?'
            icon0 = require('../images/junkyFood.png')
            icon100 = require('../images/salad.png')
            break;
        default:
            break;
    }

    // const {width} = Dimensions.get('window')
    // const left = value * (width - 90) / 125;

    return (
        <View style={styles.moodCard}>
            <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 18, color: '#092B40'}}>{topText}</Text>
            {/* <Text style={ { width: 50, textAlign: 'center', left: left } }>{value}`%</Text> */}
            <Slider
                style={{width: '100%', marginTop: 24, marginBottom: 7}}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#2694BF"
                maximumTrackTintColor="#f2f2f2"
                value={value}
                onValueChange={value => setValue(value)}
                thumbImage={track}
                step={1}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 7}}>
                <Image source={icon0} />
                <Image source={icon100} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    moodCard: {
        backgroundColor: "#FFFFFF",
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowRadius: 15,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1,
        elevation: 3,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginTop: 24
    }
})

export default MoodCard