import React from 'react'
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native'

import top from '../../../assets/topo.png'

export function Carrinho() {
  return (
    <>
      <Image source={top} style={styles.top} />
      <Text style={styles.title}>Detalhe do Carrinho</Text>
      <View>
        <Text>Carrinho de Compras</Text>
        <Text>Fazenda ETEC 'Cidade do Livro'</Text>
        <Text>Uma cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
        <Text>R$40,00</Text>
      </View>
    </>
  )
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: (578 / 768) * width
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 26,
    width: '100%',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    padding: 16
  }
})
