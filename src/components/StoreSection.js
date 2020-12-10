import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {Feather} from '@expo/vector-icons'

const StoreSection = ({sector, products}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12}}>
                <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 18, color: '#092B40'}}>{sector}</Text>
                <Feather name="plus-circle" size={24} color={'#2694BF'} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {products.map((product, index) => {
                    return (
                        <View style={{alignItems: 'center', marginRight: 23, width: 165}} key={`prod_${index}`}>
                            <Image source={product.picture} style={{marginBottom: 22}} />
                            <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 14, color: '#092B40', textTransform: 'uppercase', textAlign: 'center', marginBottom: 17}}>{product.title}</Text>
                            <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 16, color: '#092B40'}}>R$ {product.price}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 33,
        paddingVertical: 26
    }
})

export default StoreSection