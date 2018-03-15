import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export const Header = ({ loading, text }) =>
!loading ? (
  <View style={styles.container}>
		<TouchableOpacity>
			<Text style={styles.text}>{text.toLowerCase()}</Text>
		</TouchableOpacity>
  </View>
) : null

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'jikutype-001-Vector',
    fontSize: 7,
    color: 'rgba(153, 119, 255, 1)',
  }
});