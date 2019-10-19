import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar
} from 'react-native'
import AppNavigation from './navigation/AppNavigation'
import Color from './theme/Color'

const RootContainer = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={Color.primaryDark} />
      <AppNavigation />
    </>
  )
}

export default RootContainer
