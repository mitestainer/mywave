import React, { useState } from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, Image} from 'react-native'
import DatePicker from 'react-native-datepicker'
import Picker from '../components/Picker'
import {Feather, FontAwesome} from '@expo/vector-icons'
import Button from '../components/Button'
import { BorderlessButton } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

const confirm = require('../images/icon-confirm.png')
const log1 = require('../images/log1.png')
const log2 = require('../images/log2.png')

const Log = () => {
    const [date, setDate] = useState(null)
    const [showLog, toggleLog] = useState(false)

    const navigator = useNavigation()

    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <ScrollView contentContainerStyle={{paddingHorizontal: 40}}>
                <View style={styles.searchBeachBox}>
                    <Feather name="map-pin" style={styles.mapPin} size={24} />
                    <TextInput style={styles.searchBeachInput} placeholder="Localização" placeholderTextColor="#B4B4B4" />
                </View>
                <DatePicker
                    style={styles.datePicker}
                    date={date}
                    placeholder="Data"
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
                <View style={{marginTop: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                    <View>
                        <Text style={{fontFamily: 'Roboto_300Light', fontSize: 18, color: '#0C4459'}}>Início</Text>
                        <View style={styles.timePicker}>
                            <Text style={{color: '#b4b4b4'}}>00</Text>
                            <Text style={{color: '#092B40'}}>horas</Text>
                            <View>
                                <FontAwesome name="caret-up" color={'#b4b4b4'} />
                                <FontAwesome name="caret-down" color={'#b4b4b4'} />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Roboto_300Light', fontSize: 18, color: '#0C4459'}}>Término</Text>
                        <View style={styles.timePicker}>
                            <Text style={{color: '#b4b4b4'}}>00</Text>
                            <Text style={{color: '#092B40'}}>horas</Text>
                            <View>
                                <FontAwesome name="caret-up" color={'#b4b4b4'} />
                                <FontAwesome name="caret-down" color={'#b4b4b4'} />
                            </View>
                        </View>
                    </View>
                    <BorderlessButton onPress={() => toggleLog(true)}>
                        <Image source={confirm} style={{marginBottom: 12}} />
                    </BorderlessButton>
                </View>
                <View style={showLog ? {marginTop: 22, marginBottom: 30} : {height: 0, overflow: 'hidden'}}>
                    <View style={[styles.logCard]}>
                        <Image source={log1} resizeMode={"contain"} style={{height: '100%', width: '100%'}} />
                    </View>
                    <View style={styles.logCard}>
                        <Image source={log2} resizeMode={"contain"} style={{height: '100%', width: '100%'}} />
                    </View>
                </View>
                <View style={showLog ? {display: 'none'} : styles.line} />
                <Picker options={['Como estava a textura da onda?', 'Lisa', 'Um pouco encrespada', 'Muito mexida', 'Storm']} />
                <Picker options={['Como estava a qualidade da onda?', 'Perfeita (abrindo todas)', "Abrindo a maioria", "Abrindo mas rápidas de mais", 'Fechando a maioria', 'Só fechadeira']} />
                <Picker options={['Como estava o estilo da onda?', 'Tubular', 'Emparedada']} />
                <Picker options={['Classifique a altura média da face', 'Flat', '0,5m', '1m', '1,5m', '2m', '2,5m', '3m', '4m', '5+']} />
                <Button buttonStyle={styles.button} action={() => navigator.navigate('Log2')} text="Continuar" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBeachBox: {
        height: 58,
        borderWidth: 1.5,
        borderColor: "#B4B4B4",
        borderStyle: "solid",
        borderRadius: 4,
        position: 'relative',
        justifyContent: 'center',
        marginBottom: 24
    },
    mapPin: {
        position: 'absolute',
        left: 25
    },
    searchBeachInput: {
        paddingLeft: 64,
        fontFamily: 'Roboto_400Regular',
        fontSize: 20
    },
    datePicker: {
        width: '100%',
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
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 44,
        marginBottom: 20
    },
    timePicker: {
        width: 133,
        height: 58,
        borderWidth: 1.5,
        borderColor: "rgba(185, 191, 199, 0.75)",
        borderStyle: "solid",
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    button: {
        backgroundColor: "#0C4459",
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
        marginTop: 24,
        marginBottom: 38,
        alignSelf: 'center'
    },
    logCard: {
        width: '100%',
        height: 285,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1,
        elevation: 3,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        marginBottom: 16
      }
})

export default Log