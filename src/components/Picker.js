import React, { useState } from 'react'
import {View, StyleSheet} from 'react-native'
import {Picker} from '@react-native-community/picker'

const CustomPicker = ({options, style, mode}) => {
    const [value, setValue] = useState(0)

    return (
        <View style={[styles.select, style]}>
            <Picker mode={!mode ? 'dialog' : mode} selectedValue={value} style={[styles.picker, {color: value !== 0 ? '#092B40' : '#B4B4B4'}]} onValueChange={itemValue => setValue(itemValue)}>
                {options.map((option, index) => <Picker.Item key={`${option}_${index}`} label={option} value={index} />)}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    select: {
        width: '100%',
        height: 58,
        borderWidth: 1,
        borderColor: '#B9BFC7',
        borderRadius: 4,
        borderStyle: 'solid',
        paddingLeft: 10,
        marginTop: 24
    },
    picker: {
        width: '100%',
        height: '100%',
        fontFamily: 'Roboto_400Regular',
        fontSize: 20
    }
})

export default CustomPicker