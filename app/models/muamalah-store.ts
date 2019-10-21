import { types } from "mobx-state-tree"
import _ from 'lodash'

const source = require("./muamalah.json")

export const MuamalahModel = types.model("Muamalah", {
  name: types.string,
  address: types.string,
  phone: types.string,
  products: types.array(types.string),
  services: types.array(types.string)
})

export type Muamalah = typeof MuamalahModel.Type
export type MuamalahSnapshot = typeof MuamalahModel.SnapshotType


export const MuamalahStoreModel = types.model("MuamalahStore", {
  stores: types.array(MuamalahModel)
})
.actions(self => ({
  setStores:(stores: MuamalahSnapshot[]) =>{
    self.stores.replace(stores as any)
  },
}))
.actions(self => ({
  getAll: () => {
    self.setStores(source.data)
  }
}))
.actions(self => ({
  filter: (keyword: string) => {
    if (keyword === '') {
      self.getAll()
    } else {
      const searchResult = _.filter(source.data, (item: Muamalah) => {
        keyword = keyword.toLowerCase()

        const foundName = _.includes(item.name.toLowerCase(), keyword)
        const foundAddress = _.includes(item.address.toLowerCase(), keyword)
        const foundProduct = _.filter(item.products, (p: string) => _.includes(p.toLowerCase(), keyword)).length > 0
        const foundService = _.filter(item.services, (p: string) => _.includes(p.toLowerCase(), keyword)).length > 0
        return foundName || foundAddress || foundProduct || foundService
      })
      self.setStores(searchResult)
    }
  }
}))

export type MuamalahStore = typeof MuamalahStoreModel.Type
export type MuamalahStoreSnapshot = typeof MuamalahStoreModel.SnapshotType