import Asset from './asset'
import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  clientState: {
    defaults: {
      connection: {
        __typename: `Connection`,
        online: true,
        latency: 0
      },
      user: {
        __typename: `User`,
        authorization: 0,
        location: `/`,
      },
      settings: [
        {
          __typename: `Switch`,
          id: `animate`,
          value: true
        }
      ]
    },
    resolvers: {
      Query: {
        connection: (_, __, { cache }) => {
          const { connection } = cache.readQuery({ query: GET_CONNECTION })
          return `connection? ${connection}`
        },
        projects: async (_, __, { cache }) => {
          try {
            const projects = JSON.parse(await Asset('Projects.json'))
            return projects.map(x => Object.assign(x, { __typename: `Project` }))
          } catch(e) { console.log(e) }
        },
        routes: async (_, __, { cache }) => {
          try {
            const routes = JSON.parse(await Asset('Routes.json'))
            return routes.map(x => Object.assign({ component: null, data: null }, x, { __typename: `Route` }))
          } catch(e) { console.log(e) }
        },
        menu: async (_, __, { cache }) => {
          try {
            const menu = JSON.parse(await Asset('Menu.json'))
            return menu.map(x => Object.assign(x, { __typename: `Menu` }))
          } catch(e) { console.log(e) }
        },
        parser: async (_, __, { cache }) => {
          try {
            const markdown = await Asset(`Sweetie.md`) // TODO: !Hardcode
            return Object.assign({ markdown }, { __typename: `Markdown` })
          } catch(e) { console.log(e) }
        },
      },
      Mutation: {
        setConnection: (_, connection, { cache }) => {
          cache.writeData({
            data: {
              connection: {
                __typename: `Connection`,
                online: connection.online
              }
            }
          })
          return null
        },
        setSetting: (_, { setting }, { cache }) => {
          cache.writeData({
            data: {
              settings: [
                setting
              ]
            }
          })
          return null
        },
        setUser: (_, user, { cache }) => {
          const data = {
            user: {
              __typename: `User`,
              location: user.location
            }
          }
          cache.writeData({ data })
          return null
        }
      }
    }
  }
})
