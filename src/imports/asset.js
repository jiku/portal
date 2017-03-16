import { Meteor } from 'meteor/meteor'

export default async filename => {
  let d = await new Promise((resolve, reject) => {
    try {
      Meteor.call('file.get.async', { filename }, (err, res) => {
        if (err) reject('Something went wrong')
        resolve(res)
      })
    } catch(err) {
      throw new Meteor.Error(err);
    }
  })
  return await d
}
