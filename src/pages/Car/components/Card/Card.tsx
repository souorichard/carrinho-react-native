import React from 'react'

import { StyleSheet, Image, Text, View, ImageSourcePropType } from 'react-native'

type CardProps = {
  image: ImageSourcePropType
  farm: string
  description: string
  price: number
}

export default function Card({ image, farm, description, price }: CardProps) {
  return (
    <View style={styles.cardFarm}>
      <View style={styles.farm}>
        <Image style={styles.imageFarm} source={image} />
        <Text style={styles.nameFarm}>{farm}</Text>
      </View>
      <Text style={styles.description}>
        {description}
      </Text>
      <Text style={styles.price}>R${price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardFarm: {
    marginVertical: 8,
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
  imageFarm: {
    width: 32,
    height: 32
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'MontBold',
    color: '#fff'
  },
  description: {
    fontFamily: 'MontRegularItalic',
    color: '#a3a3a3'
  },
  price: {
    fontSize: 26,
    lineHeight: 42,
    fontFamily: 'MontSemiBold',
    color: '#2a9f85',
    marginTop: 8
  }
})
