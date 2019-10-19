import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { SafeAreaView } from 'react-navigation'

const ScreenTwo = () => {
  return (
    <SafeAreaView>
      <TouchableHighlight>
        <Text>Screen two</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

ScreenTwo.navigationOptions = {
  title: "Screen two"
}

export default ScreenTwo
