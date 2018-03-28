import { App } from './'
import { params } from './data/params'
import { AppRegistry } from 'react-native'

AppRegistry.registerComponent("App", () => () => App(params))
AppRegistry.runApplication("App", { rootTag: document.getElementById("app") })