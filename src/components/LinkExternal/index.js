import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Linking } from 'react-native'

const goTo = url => e => {
  Linking.canOpenURL(url).then(supported => { // TODO: Refactor to async/await try/catch
    if (supported) {
      Linking.openURL(url)
    } else {
      console.log(`Can't open URI: ${url}`)
    }
  })
}

export const LinkExternal = ({ items }) => // TODO: Make this usable for inline text.
  <View style={styles.container}>
    {items.map(i =>
      <TouchableOpacity key={i.id} onPress={goTo(i.url)}>
        <Text style={styles.text}>{i.name}</Text>
      </TouchableOpacity>
    )}
  </View>

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center', // NOTE: Is this vertical?
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 127, 0, .5)',
    // gridAutoFlow: "column"
  },
  text: {
    fontFamily: 'jikutype-001-Vector',
    fontSize: 3
  }
});