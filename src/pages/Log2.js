import React, { useState } from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, Image, Modal} from 'react-native'
import {Feather, FontAwesome} from '@expo/vector-icons'
import Button from '../components/Button'
import { BorderlessButton } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

import MoodCard from '../components/MoodCard'

const ribbon = require('../images/ribbon.png')

const Log = () => {
    const [rating, setRating] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)

    const navigator = useNavigation()

    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <ScrollView contentContainerStyle={{paddingHorizontal: 40}}>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 18, color: '#092B40'}}>Conta para a gente como você estava nesse dia.</Text>
                <MoodCard type='mood' />
                <MoodCard type='sleep' />
                <MoodCard type='food' />
                <View style={styles.moodCard}>
                    <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 18, color: '#092B40'}}>Como foi o seu desempenho nas ondas?</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 70, marginVertical: 20}}>
                        <BorderlessButton onPress={() => setRating(1)}>
                            <FontAwesome name="star" size={28} color={rating >= 1 ? '#2694BF' : '#D5E5F2'} />
                        </BorderlessButton>
                        <BorderlessButton onPress={() => setRating(2)}>
                            <FontAwesome name="star" size={28} color={rating >= 2 ? '#2694BF' : '#D5E5F2'} />
                        </BorderlessButton>
                        <BorderlessButton onPress={() => setRating(3)}>
                            <FontAwesome name="star" size={28} color={rating >= 3 ? '#2694BF' : '#D5E5F2'} />
                        </BorderlessButton>
                        <BorderlessButton onPress={() => setRating(4)}>
                            <FontAwesome name="star" size={28} color={rating >= 4 ? '#2694BF' : '#D5E5F2'} />
                        </BorderlessButton>
                        <BorderlessButton onPress={() => setRating(5)}>
                            <FontAwesome name="star" size={28} color={rating >= 5 ? '#2694BF' : '#D5E5F2'} />
                        </BorderlessButton>
                    </View>
                </View>
                <Button buttonStyle={styles.button} action={() => setModalVisible(!modalVisible)} text="Continuar" />
            </ScrollView>
            <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(!modalVisible)}
                // onDismiss={() => navigator.navigate('Main')}
                transparent={true}
            >
                <View style={{backgroundColor: 'rgba(255, 255, 255, 0.7);', flex: 1, alignItems: 'center'}}>
                    <View style={styles.modalCard}>
                        <BorderlessButton onPress={() => setModalVisible(false)} style={{height: 30, width: 30, alignSelf: 'flex-end', position: 'absolute', top: 15, right: 15}}>
                            <Feather name="x" size={30} color="#D5E5F2" />
                        </BorderlessButton>
                        <Image source={ribbon} />
                        <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 28, color: '#0C4459', marginTop: 26}}>Parabéns!</Text>
                        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 20, color: '#0C4459', textAlign: 'center', marginTop: 8}}>{`Você está no caminho certo! Continue focando nos\nseus objetivos.`}</Text>
                        <View style={{marginTop: 28, position: 'relative'}}>
                            <View style={{position: 'absolute', width: 39, height: 14, backgroundColor: '#2694BF', borderRadius: 100, zIndex: 2}}></View>
                            <View style={{width: 228, height: 14, backgroundColor: '#FFFFFF', borderRadius: 100}}></View>
                        </View>
                        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 14, color: '#0C4459', textAlign: 'center', marginTop: 8}}>32.784 / 500.000</Text>
                    </View>
                </View>
            </Modal>
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
    modalCard: {
        width: 353,
        height: 380,
        backgroundColor: '#7BC0C3',
        shadowOffset: {
            width: 0,
            height: 8
          },
        shadowRadius: 24,
        shadowColor: "rgba(123, 192, 195, 0.6)",
        shadowOpacity: 1,
        elevation: 3,
        borderRadius: 32,
        padding: 15,
        marginTop: 100,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center'
    }
})

export default Log