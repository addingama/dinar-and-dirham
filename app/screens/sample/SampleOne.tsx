import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '../../hooks'

const ScreenOne = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Button
        title='Click me'
        icon={<Icon name='home' />}
        onPress={() => navigation.navigate('ScreenTwo')} />
    </SafeAreaView>
  )
}

ScreenOne.navigationOptions = {
  title: 'Sample Screen',
};

export default ScreenOne
