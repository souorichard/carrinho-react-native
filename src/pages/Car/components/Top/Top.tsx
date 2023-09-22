import React from 'react'
import { StyleSheet, Image, Dimensions, Text} from 'react-native'

import top from '../../../../../assets/topo.png'

export default function Top() {
  return (
    <>
      <Image source={top} style={styles.top} />
      <Text style={styles.title}>Detalhe do Carrinho</Text>
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
    fontFamily: 'MontBold',
    lineHeight: 26,
    width: '100%',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    padding: 16
  }
});
