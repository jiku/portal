import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { View, Text, StyleSheet } from 'react-native'

export const NotFound = () =>
  <Fragment>
    <View style={styles.container}>
      <Text style={styles.header}>content not found!</Text>
      <Text style={styles.subheader}>please contact if you think it's missing.</Text>
      {/* <Text style={styles.subheader}>Please <Link to={`/contact`}>contact</Link> if you think it's missing.</Text> */}
    </View>
  </Fragment>

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // NOTE: Is this vertical?
    justifyContent: 'center',
    height: '100%',
    // width: '100%',
    // paddingLeft: '5%',
    // paddingRight: '5%'
    // gridAutoFlow: "column"
  },
  header: {
    fontFamily: 'jikutype-001-Vector',
    fontSize: 3,
    color: 'rgba(153, 119, 255, 1)',
  },
  subheader: {
    fontFamily: 'jikutype-001-Vector',
    fontSize: 2,
    color: 'rgba(153, 119, 255, 1)',
  }
});