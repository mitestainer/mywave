import React, { useState } from 'react'
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import Picker from '../components/Picker'
import CheckBox from '@react-native-community/checkbox'
import DatePicker from 'react-native-datepicker'

const uploadProfileImg = require('../images/uploadProfileImage.png')

const Login = () => {
    const navigator = useNavigation()

    const [date, setDate] = useState(null)
    const [accepted, setAccepted] = useState(false)

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Image source={uploadProfileImg} style={styles.profileImage} />
                <DatePicker
                    style={styles.datePicker}
                    date={date}
                    placeholder="Data de nascimento"
                    showIcon={false}
                    mode="date"
                    format="DD-MM-YYYY"
                    maxDate={new Date()}
                    onDateChange={date => setDate(date)}
                    customStyles={{
                        dateInput: {
                            borderWidth: 0,
                            alignItems: 'flex-start',
                        },
                        dateText: {
                            fontSize: 20,
                            fontFamily: 'Roboto_400Regular',
                            color: '#092B40'
                        },
                        placeholderText: {
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 20,
                            color: '#B4B4B4'
                        }
                    }}
                />
                <Picker label="Estado" options={['Estado', 'RJ', 'SP']} />
                <Picker label="Cidade" options={['Cidade', 'Ubatuba']} />
                <Picker label="Gênero" options={['Gênero', 'Masculino', 'Feminino']} />
                <View style={styles.terms}>
                    <CheckBox value={accepted} onValueChange={() => setAccepted(!accepted)} />
                    <Text style={[styles.termsText, {color: !accepted ? '#B4B4B4' : '#0C4459'}]}>Aceito termos e condições</Text>
                </View>
                <View style={[styles.button, {backgroundColor: accepted ? "#0C4459" : "rgba(12, 68, 89, 0.25)"}]} >
                    <RectButton style={styles.buttonFixer} onPress={() => accepted && navigator.navigate('Complete')}>
                        <Text style={styles.buttonText}>Concluir</Text>
                    </RectButton>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scroll: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingBottom: 55
    },
    profileImage: {
        marginVertical: 25
    },
    datePicker: {
        width: 334,
        height: 58,
        borderWidth: 1,
        borderColor: "#B9BFC7",
        borderStyle: "solid",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    button: {
        borderRadius: 38,
        height: 60,
        width: 280,
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
        borderBottomLeftRadius: 100,
        marginTop: 40
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 22,
        color: '#fff',
        fontFamily: 'Roboto_500Medium'
    },
    buttonFixer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    terms: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10
    },
    termsText: {
        textDecorationLine: 'underline',
    }
})

export default Login