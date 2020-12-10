import React from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import Picker from '../components/Picker'
import {FontAwesome} from '@expo/vector-icons'

const Complete = () => {
    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 18, color: '#092B40', alignSelf: 'flex-start', marginTop: 40}}>Meu estilo</Text>
                <Picker mode="dropdown" options={['Classifique teu momento no surf', 'Ainda praticando na espuma', 'Já vou para o outside e tento ir para a parede da onda', 'Já arrisco uns carves na parede da onda', 'Mando manobras certeiras e me arrisco nos tubos']} style={{marginTop: 8}} />
                <Picker mode="dropdown" options={['Qual a tua prancha do dia a dia?', 'Shortboard (mais usada)', 'Bodyboard', 'Funboard', 'Evolution', 'Fish e Retro Fish', 'Mini Malibu', 'Longboard', 'Gun', 'Performance, Mini models', 'Stand Up Paddle Board']} />
                <View style={styles.boardSize}>
                    <View>
                        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12, color: '#092B40'}}>Tamanho da prancha</Text>
                        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 18, color: '#B4B4B4'}}>00’ 00”</Text>
                    </View>
                    <View>
                        <FontAwesome name="caret-up" color={'#b4b4b4'} />
                        <FontAwesome name="caret-down" color={'#b4b4b4'} />
                    </View>
                </View>
                <Picker mode="dropdown" options={['Outras pranchas que você gosta?', 'Shortboard (mais usada)', 'Bodyboard', 'Funboard', 'Evolution', 'Fish e Retro Fish', 'Mini Malibu', 'Longboard', 'Gun', 'Performance, Mini models', 'Stand Up Paddle Board']} />
                <Picker mode="dropdown" options={['Qual o teu tipo de onda predileta?', 'Cheia', 'Emparedada', 'Tubular']} />
                <Picker mode="dropdown" options={['Qual o tamanho perfeito da onda?', '0,5m', '1m', '1,5m', '2m', '2,5m +', 'Meu negócio é onda gigante']} />
                <View style={{width: '100%', height: 58, borderWidth: 1, borderColor: "#B4B4B4", borderStyle: "solid", borderRadius: 4, marginTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 12, paddingRight: 20}}>
                    <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 16, color: '#B4B4B4'}}>Escolha suas praias favoritas</Text>
                    <FontAwesome name="star" size={20} color="#b4b4b4" />
                </View>
                <View style={[styles.button, {backgroundColor: "#0C4459"}]} >
                    <RectButton style={styles.buttonFixer} onPress={() => navigator.navigate('App')}>
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
    boardSize: {
        width: '100%',
        height: 58,
        borderWidth: 1,
        borderColor: "#B4B4B4",
        borderStyle: "solid",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        marginTop: 24,
        paddingVertical: 12,
        paddingLeft: 12,
        paddingRight: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    }
})

export default Complete