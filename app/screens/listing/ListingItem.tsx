import React from 'react'
import { Card, Text, Icon } from 'react-native-elements';
import Color from '../../theme/Color';
import { TextStyle, View, ViewStyle } from 'react-native';
import ProductListing from './ProductListing';
import ServiceListing from './ServiceListing';
import { MuamalahSnapshot } from '../../models';

const titleStyle: TextStyle = {
  color: Color.secondaryDark,
  fontSize: 18,
  marginBottom:5
}

const addressContainerStyle: ViewStyle = {
  flexDirection: 'row',
  marginBottom: 10,
  alignItems: 'center'
}
const addressStyle: TextStyle = {
  fontWeight: "300",
  color: Color.primaryLight,
  marginLeft: 15,
  flex: 1
}

const ListingItem = ({item} : {item: MuamalahSnapshot}) => {
  return (
    <Card>
      <Text style={titleStyle}>{item.name}</Text>
      <View style={addressContainerStyle}>
        <Icon name="location" type="entypo" color={Color.primaryLight}/>
        <Text style={addressStyle}>{item.address}</Text>
      </View>
      <ProductListing items={item.products}/>
      <ServiceListing items={item.services}/>
    </Card>
  );
}

export default ListingItem;