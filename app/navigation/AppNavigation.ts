import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import SampleNavigator from './SampleNavigation'

const AppNavigator = createSwitchNavigator({
  Sample: { screen: SampleNavigator }
})

export default createAppContainer(AppNavigator)
