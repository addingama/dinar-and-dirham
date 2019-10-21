import React, { Component, useState } from 'react'
import { Text, Platform, FlatList } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { SearchBar, ListItem, Card } from 'react-native-elements';
import Color from '../../theme/Color';
import ListingItem from './ListingItem';
import _ from 'lodash'
import { RootStore, useRootStore, MuamalahSnapshot, MuamalahStore } from '../../models';
import { inject, observer } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';


const source = require("./muamalah.json")


interface P extends NavigationStackScreenProps<{}> {
  muamalahStore: MuamalahStore
}

interface S {
  keyword: string
}

@inject("muamalahStore")
@observer
class ListingScreen extends Component<P, S> {
  constructor(props: P) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  componentDidMount() {
    this.props.muamalahStore.getAll()
  }
  renderItem = ({item, index}: {item: MuamalahSnapshot, index: number}) => {
    return (
      <ListingItem item={item}/>
    )
  }
  
  render() {
    const {keyword} = this.state
    const {muamalahStore} = this.props
    return (
      <>
        <SearchBar 
          placeholder='Kata kunci pencarian'
          platform={'ios'}
          value={keyword}
          onChangeText={(keyword: string) => this.setState({keyword}, ()=> {
            muamalahStore.filter(keyword)
          })}/>
        <FlatList 
          keyExtractor={(item, index) => `muamalah_${index}`}
          data={getSnapshot(muamalahStore.stores)}
          renderItem={this.renderItem}
        />
      </>
    );
  }
}


export default ListingScreen;