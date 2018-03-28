import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

export const Static = () => // HACK: Finds image, but have to pass width/height to render... Why?
  <View id="root"><ImageBackground source={require('./bg.png')} style={{ width: '100%', height: '100%' }}><Text>OK?</Text></ImageBackground></View>