import React, { Component } from 'react'
import { Text, Platform, FlatList } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { SearchBar, ListItem, Card } from 'react-native-elements';
import Muamalah from './Muamalah'
import Color from '../../theme/Color';
import ListingItem from './ListingItem';
import _ from 'lodash'

const source = require("./muamalah.json")
const listingMuamalah: Muamalah[] = source.data


type P = {
  navigation: NavigationStackScreenProps
};

type S = {
  keyword?: string,
  data: Muamalah[]
};


class ListingScreen extends Component<P, S> {
  state = { 
    keyword: '',
    data: listingMuamalah
  }

  search = (keyword: string) => {
    this.setState({ keyword })
    if (keyword === '') {
      this.setState({ data: listingMuamalah })
    } else {
      const searchResult = _.filter(listingMuamalah, (item: Muamalah) => {
        keyword = keyword.toLowerCase()

        const foundName = _.includes(item.name.toLowerCase(), keyword)
        const foundAddress = _.includes(item.address.toLowerCase(), keyword)
        const foundProduct = _.filter(item.products, (p: string) => _.includes(p.toLowerCase(), keyword)).length > 0
        const foundService = _.filter(item.services, (p: string) => _.includes(p.toLowerCase(), keyword)).length > 0
        return foundName || foundAddress || foundProduct || foundService
      })
      this.setState({ data: searchResult })
    }
  }
  renderItem = ({item, index}: {item: Muamalah, index: number}) => {
    return (
      <ListingItem item={item}/>
    )
  }
  render() {
    const { keyword, data } = this.state
    return (
      <>
        <SearchBar 
          placeholder='Kata kunci pencarian'
          value={keyword}
          platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          onChangeText={(keyword: string) => this.search(keyword)}/>
        <FlatList 
          keyExtractor={(item, index) => `muamalah_${index}`}
          data={data}
          renderItem={this.renderItem}
        />
      </>
    );
  }
}

export default ListingScreen;