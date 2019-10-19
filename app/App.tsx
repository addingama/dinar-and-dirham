/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'

import RootContainer from './RootContainer'
import { ThemeProvider } from 'react-native-elements'
import RNETheme from './theme/RNETheme'

const App = () => {
  return (
    <>
      <ThemeProvider theme={RNETheme}>
        <RootContainer />
      </ThemeProvider>
    </>
  )
}

export default App
