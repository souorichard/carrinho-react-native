import React from 'react'
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native'

import top from '../../../assets/topo.png'
import logo from '../../../assets/logo.png'

export function Car() {
  return (
    <>
      <Image source={top} style={styles.top} />
      <Text style={styles.title}>Detalhe do Carrinho</Text>
      <View style={styles.car}>
        <Text style={styles.titleCar}>Carrinho de Compras</Text>

        <View style={styles.cardFarm}>
          <View style={styles.farm}>
            <Image style={styles.imageFarm} source={logo} />
            <Text style={styles.nameFarm}>Fazenda ETEC 'Cidade do Livro'</Text>
          </View>
          <Text style={styles.description}>
            Uma cesta de produtos selecionados cuidadosamente da fazenda direto
            para sua cozinha
          </Text>
          <Text style={styles.price}>R$40,00</Text>
        </View>
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
  },
  titleCar: {
    fontSize: 26,
    lineHeight: 42,
    color: '#fff'
  },
  car: {
    height: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    display: 'flex',
    gap: 16,
    backgroundColor: '#212121'
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: 'bold',
    color: '#fff'
  },
  imageFarm: {
    width: 32,
    height: 32
  },
  cardFarm: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#323232',
    borderRadius: 4
  },
  farm: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12
  },
  description: {
    fontStyle: 'italic',
    color: '#a3a3a3'
  },
  price: {
    fontSize: 26,
    lineHeight: 42,
    color: '#2a9f85',
    marginTop: 8
  },
  bg: {
    backgroundColor: '#080808'
  }
})
