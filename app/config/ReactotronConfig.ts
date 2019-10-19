import { NativeModules } from 'react-native'
import Reactotron from 'reactotron-react-native'

if (__DEV__) {
  // https://github.com/infinitered/reactotron for more options!

  const scriptURL = NativeModules.SourceCode.scriptURL
  const scriptHostname = scriptURL.split('://')[1].split(':')[0]

  Reactotron
    .configure({
      host: scriptHostname,
      name: 'Addin Showcase'
    })
    .useReactNative()
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
}
