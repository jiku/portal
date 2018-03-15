// import { Meteor } from 'meteor/meteor'
// import M from 'meteor/meteor'
// import ReactNativeMeteor from 'meteor/meteor'

export const Asset = async (filename, Meteor) => {
  // let M = Meteor || null
  // if (!Meteor.call) M = ReactNativeMeteor
  // M = ReactNativeMeteor
  // console.log(`hey`, Meteor)
  // const Meteor = await (import('meteor/meteor').Meteor) || await import('react-native-meteor')
  // const Meteor = await (import('meteor/meteor').Meteor) || await import('meteor/meteor')
  // console.log(Meteor)
  let d = await new Promise((resolve, reject) => {
    // let Meteor = M
    // if (!Meteor.call) Meteor = M.Meteor
    // const Meteor = import('meteor/meteor').Meteor || import('react-native-meteor')
    try {
      Meteor.call('file.get.async', { filename }, (err, res) => {
        if (err) reject('Something went wrong')
        resolve(res)
      })
    } catch(err) {
      throw new M.Error(err);
    }
  })
  return await d
}