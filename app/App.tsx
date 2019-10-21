/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import codePush from "react-native-code-push"
import { ThemeProvider } from 'react-native-elements'
import RNETheme from './theme/RNETheme'
import { RootStore, setupRootStore } from "./models"
import { Provider } from "mobx-react"
import { StatusBar } from 'react-native'
import AppNavigation from './navigation/AppNavigation'
import Color from './theme/Color'

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

interface AppState {
  rootStore?: RootStore
}

export class App extends React.Component<{}, AppState> {
  
  /**
   * When the component is mounted. This happens asynchronously and simply
   * re-renders when we're good to go.
   */
  async componentDidMount() {
    this.setState({
      rootStore: await setupRootStore(),
    })
  }


  render() {
    const rootStore = this.state && this.state.rootStore

    // Before we show the app, we have to wait for our state to be ready.
    // In the meantime, don't render anything. This will be the background
    // color set in native by rootView's background color.
    //
    // This step should be completely covered over by the splash screen though.
    //
    // You're welcome to swap in your own component to render if your boot up
    // sequence is too slow though.
    if (!rootStore) {
      return null
    }

    // otherwise, we're ready to render the app

    // --- am: begin list of stores ---
    const otherStores = {
      muamalahStore: rootStore.muamalah
    }
    // --- am: end list of stores ---

    return (
      <>
        <ThemeProvider theme={RNETheme}>
          <Provider rootStore={rootStore} {...otherStores}>
            <>
              <StatusBar barStyle='light-content' backgroundColor={Color.primaryDark} />
              <AppNavigation />
            </>
          </Provider>
        </ThemeProvider>
      </>
    )
  }
}

export default codePush(codePushOptions)(App)
