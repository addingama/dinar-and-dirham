import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';
import _ from 'lodash'
import Color from '../../theme/Color';

const wrapper: ViewStyle = {
  marginBottom: 10
}
const titleContainer: ViewStyle = {
  flexDirection: 'row', 
  alignItems: 'center', 
  marginTop: 10
}
const titleStyle: TextStyle = {
  marginLeft: 15
}

const itemStyle: TextStyle = {
  color: Color.primaryLight
}
const ProductListing = ({items}: {items: string[]}) => {
  if (items && items.length > 0) {
    return (
      <View style={wrapper}>
        <Divider />
        <View style={titleContainer}>
          <Icon name="dropbox" type="antdesign" color={Color.primaryLight}/>
          <Text style={titleStyle}>Daftar Produk</Text>
        </View>
        
        {_.map(items, (product: string[], index: number) => {
          return <Text key={`${product}-${index}`} style={itemStyle}>- {product}</Text>
        })}
      </View>
    );
  }
  return null
}

export default ProductListing;