import React from 'react'
import { Card, Text, Icon } from 'react-native-elements';
import Color from '../../theme/Color';
import { TextStyle, View, ViewStyle } from 'react-native';
import ProductListing from './ProductListing';
import ServiceListing from './ServiceListing';
import { MuamalahSnapshot } from '../../models';
import { Button } from '../../components/button';
import OpenMap from "react-native-open-map";
import call from 'react-native-phone-call';

const titleStyle: TextStyle = {
  color: Color.secondaryDark,
  fontSize: 18,
  marginBottom:5
}

const actionContainer: ViewStyle = {
  flexDirection: 'row',
  marginVertical: 10,
  alignItems: 'center',
  justifyContent: 'space-around'
}
const addressStyle: TextStyle = {
  fontWeight: "300",
  color: Color.primaryLight,
  fontSize: 12,
  flex: 1
}

const ListingItem = ({item} : {item: MuamalahSnapshot}) => {
  return (
    <Card>
      <Text style={titleStyle}>{item.name}</Text>
      <Text style={addressStyle}>{item.address}</Text>
      <View style={actionContainer}>
        {item.phone != "" && (
          <Button 
          preset="secondary" 
          title="Telepon" 
          icon={<Icon name="phone"/>}
          onPress={() => {
            call({
              number: item.phone, // String value with the number to call
              prompt: true
            })
          }}/>
        )}
       
       <Button 
        preset="secondary" 
        title="Lokasi" 
        icon={<Icon name="map"/>}
        onPress={() => {
          OpenMap.show(item.location)
        }}/>
      </View>
      <ProductListing items={item.products}/>
      <ServiceListing items={item.services}/>
    </Card>
  );
}

export default ListingItem;