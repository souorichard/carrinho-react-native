import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Top from './components/Top/Top'
import Card from './components/Card/Card'
import { card } from './mocks'

export function Car() {
  return (
    <>
      <Top />
      <View style={styles.car}>
        <Text style={styles.titleCar}>Carrinho de Compras</Text>

        <FlatList
          data={card}
          renderItem={({ item }) => <Card image={item.image} farm={item.farm} description={item.description} price={item.price} />}
          keyExtractor={item => item.id}
          style={styles.listCard}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  car: {
    height: '100%',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    backgroundColor: '#212121',
  },
  titleCar: {
    fontSize: 26,
    lineHeight: 42,
    fontFamily: 'MontSemiBold',
    color: '#fff'
  },
  listCard: {
    display: 'flex',
    flexDirection: 'column',
  }
})
