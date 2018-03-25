import Button from '../Button'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import R from 'ramda'

const Container = children =>
  <View>
    {children}
  </View>

const List = children =>
<View>
  {children}
</View>

const styles = StyleSheet.create({
  basic: {
    display: `flex`
  },
  center: {
    justifyContent: `center`,
    alignItems: `center`
  }
})

const ListItem = ({ id, image, name, description, url, tags }) =>
  <View key={id} style={[styles.basic, styles.center]}>
    {/*<View><Link href={url}>{image}</Link></View>*/}
    <Button props={{name, url}} />
    <Text>{description}</Text>
    <Text>{tags}</Text>
  </View>

export const ProjectList = R.compose(Container, List, R.map(ListItem), R.prop('projects'))