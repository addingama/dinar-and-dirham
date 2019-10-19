import React, { Component } from 'react'
import { Text, Platform, FlatList } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { SearchBar, ListItem, Card } from 'react-native-elements';
import Muamalah from './Muamalah'
import Color from '../../theme/Color';
import ListingItem from './ListingItem';

const source = require("./muamalah.json")
const listingMuamalah: Muamalah[] = source.data


type P = {
  navigation: NavigationStackScreenProps
};

type S = {
  keyword?: string
};


class ListingScreen extends Component<P, S> {
  state = { 
    keyword: ''
  }

  renderItem = ({item, index}: {item: Muamalah, index: number}) => {
    return (
      <ListingItem item={item}/>
    )
  }
  render() {
    const { keyword } = this.state
    return (
      <>
        <SearchBar 
          placeholder='Kata kunci pencarian'
          value={keyword}
          platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          onChangeText={(keyword: string) => this.setState({keyword})} />
        <FlatList 
          keyExtractor={(item, index) => `muamalah_${index}`}
          data={listingMuamalah}
          renderItem={this.renderItem}
        />
      </>
    );
  }
}

export default ListingScreen;