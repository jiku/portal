import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: `100%`,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})

export const Loader = () =>
	<View style={styles.container}>
		<ActivityIndicator size="large" />
	</View>