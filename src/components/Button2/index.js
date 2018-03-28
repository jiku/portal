import React, { Component } from 'react'
import { View, Text, Touchable, TouchableNativeFeedback, TouchableOpacity, StyleSheet, Platform, ColorPropType } from 'react-native'

const styles = StyleSheet.create({
  button: {
    elevation: 4,
    backgroundColor: '#2196F3',
    borderRadius: 2
  },
  text: {
    color: '#007AFF',
    textAlign: 'center',
    padding: 8,
    fontSize: 18,
  },
})

const buttonStyles = [styles.button]
const textStyles = [styles.text]

export const Button = ({ title, containerStyle, contentStyle, onPress }) => {
  const formattedTitle = title.toLowerCase()
  const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return <Touchable onPress={onPress}>
    <View style={[buttonStyles, containerStyle]}>
      <Text style={[textStyles, contentStyle]}>{formattedTitle}</Text>
    </View>
  </Touchable>
}