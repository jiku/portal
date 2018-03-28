import { Asset } from './asset' 
import { Meteor } from 'meteor/meteor'

export const params = () => {
	return {
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
				],
				// menu: [{ __typename: "Menu", id: 1, name: "e", url: "/menu" }],
				// routes: [{ __typename: "Route", id: 1, name: "e", url: "/route", data: null, component: null }]
			},
			resolvers: {
				Query: {
					connection: (_, __, { cache }) => {
						const { connection } = cache.readQuery({ query: GET_CONNECTION })
						return `connection? ${connection}`
					},
					projects: async (_, __, { cache }) => {
						try {
							const projects = JSON.parse(await Asset('Projects.json', Meteor))
							return projects.map(x => Object.assign(x, { __typename: `Project` }))
						} catch(e) { console.log(e) }
					},
					routes: async (_, __, { cache }) => {
						try {
							const routes = JSON.parse(await Asset('Routes.json', Meteor))
							return routes.map(x => Object.assign({ component: null, data: null }, x, { __typename: `Route` }))
						} catch(e) { console.log(e) }
					},
					menu: async (_, __, { cache }) => {
						try {
							const menu = JSON.parse(await Asset('Menu.json', Meteor))
							return menu.map(x => Object.assign(x, { __typename: `Menu` }))
						} catch(e) { console.log(e) }
					},
					parser: async (_, __, { cache }) => {
						try {
							const markdown = await Asset(`Sweetie.md`, Meteor) // TODO: !Hardcode
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
	}
}