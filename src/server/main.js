const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const getFile = async (filename) => {
  const file = await new Promise((resolve) => {
    resolve(Assets.getText(`${filename}`))
  })
  await sleep(2000)
  return file
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
