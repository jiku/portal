import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { withRouter } from 'react-router'

const clickHandler = (history, path) => e => history.push(path)

export const Menu = withRouter(({ loading, items, history }) =>
  !loading ? (
    <View style={styles.container}>
      {items.map(i =>
        <TouchableOpacity key={i.id} onPress={clickHandler(history, i.url)}>
          <Text style={styles.text}>{i.name.toLowerCase()}</Text>
        </TouchableOpacity>
      )}
    </View>
  ) : null)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center', // NOTE: Is this vertical?
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%'
    // gridAutoFlow: "column"
  },
  text: {
    fontFamily: 'jikutype-001-Vector',
    fontSize: 3,
    color: 'rgba(153, 119, 255, 1)',
  }
})