import {
  createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ListingScreen from '../screens/listing/ListingScreen'
import Color from '../theme/Color'



const AppNavigator = createStackNavigator({
  Listing: { screen: ListingScreen }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Color.primary
    },
    headerTintColor: Color.primaryText,
    title: 'Muamalah Dinar Dirham'
  }
})

export default createAppContainer(AppNavigator)
