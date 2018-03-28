import { Button } from '../Button2'
import React from 'react'
import { View } from 'react-native'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'

const settingHandler = (setting, mutate) => e =>
  mutate({ variables: { setting: { __typename: setting.__typename, id: setting.id, value: !setting.value }}})

const Toggles = ({ data: { settings }, mutate }) =>
  <View>
  { settings.map((s, i) =>
    <Button key={`${i}`} onPress={settingHandler(s, mutate)} title={`${s.id}: ${s.value}`} />
  )}
  </View>

const GET_SETTINGS = gql`
  {
    settings @client {
      id
      value
    }
  }
`

const SET_SETTING = gql`
  mutation setSetting($setting: Object) {
   setSetting(setting: $setting) @client
  }
`

export const Settings = compose(
	graphql(GET_SETTINGS),
	graphql(SET_SETTING)
)(Toggles)
