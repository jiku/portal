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
          const { connection } = cache.readQuery({ query: GET_CONNECTION }) // cache.readQuery reads cache before updating it...
          return `connection? ${connection}`
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
