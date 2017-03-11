const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const getFile = async (filename) => {
  const file = await new Promise((resolve) => {
    resolve(Assets.getText(`${filename}`))
  })
  console.log('Taking a break...')
  await sleep(5000)
  console.log('Going at it...')
  return await file
}

Meteor.methods({
  async 'file.get.async'(data) {
    // const a = await someAsyncFunction()
    // return await someOtherAsyncFunction(a)
    return await getFile(data.filename)
  },
  'svg.get'(data) {
    return Assets.getText(data.path)
  }
})
