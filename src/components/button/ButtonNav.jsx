import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from "twrnc"
import filtro from '../../images/filtro.png'
import { Image } from 'react-native-elements'

export default function ButtonNav({navigation}) {
  return (
    <TouchableOpacity

    onPress={() =>
      navigation.navigate("Filtros", {
        name: "Filtros",
      })
    }
    style={tw`w-8 h-8 mr-5`}
  >
    <Image source={filtro} style={tw`w-8 h-8 mr-3 mt-3`} > </Image>
  </TouchableOpacity>
  )
}