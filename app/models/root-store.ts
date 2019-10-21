import { Instance, SnapshotOut, types, getEnv } from "mobx-state-tree"
import { MuamalahStoreModel } from "./muamalah-store"

/**
 * A RootStore model.
 */
export const RootStoreModel = types
  .model("RootStore", {
    muamalah: types.optional(MuamalahStoreModel, {})
  })
  
  .actions(self => ({
    
  }))

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>