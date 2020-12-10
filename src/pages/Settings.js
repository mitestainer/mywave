import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import OptionButton from '../components/OptionButton'

const search = require('../images/search.png')
const profile = require('../images/icon-profile.png')
const preferences = require('../images/icon-preferences.png')
const download = require('../images/icon-download.png')
const check = require('../images/icon-check.png')
const safety = require('../images/icon-safety.png')
const broken = require('../images/icon-broken.png')

const Settings = () => {
    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{paddingHorizontal: 33, marginVertical: 33}}>
                    <Text style={styles.sectionTitle}>Perfil</Text>
                    <OptionButton icon={<Image source={profile} />} text={'Editar perfil'} />
                    <OptionButton icon={<Image source={preferences} />} text={'Preferências'} />
                    <OptionButton icon={<Image source={download} />} text={'Baixar seu histórico'} />
                    <OptionButton icon={<Image source={check} />} text={'Termos e condições'} />
                    <Text style={styles.sectionTitle}>Segurança</Text>
                    <OptionButton icon={<Image source={safety} />} text={'Alterar a senha'} />
                    <Text style={styles.sectionTitle}>Conta</Text>
                    <OptionButton icon={<Image source={broken} />} text={'Deletar a conta'} />
                    <OptionButton icon={<Feather name="log-out" size={24} />} text={'Sair da conta'} onPress={() => navigator.navigate('Login')} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    sectionTitle: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 18, 
        color: '#092B40',
        marginBottom: 8
    }
    
})

export default Settings