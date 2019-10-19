import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar
} from 'react-native'
import AppNavigation from './navigation/AppNavigation'

const RootContainer = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <AppNavigation />
    </>
  )
}

export default RootContainer
