import { createStackNavigator } from 'react-navigation-stack'
import ScreenOne from '../screens/sample/SampleOne'
import ScreenTwo from '../screens/sample/SampleTwo'

const SampleNavigator = createStackNavigator({
  ScreenOne: { screen: ScreenOne },
  ScreenTwo: { screen: ScreenTwo }
})

export default SampleNavigator
