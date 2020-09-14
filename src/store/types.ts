import { Timenote } from "../global"

export type StoreState = {
  timenotes: Timenote[]
}

export type GetState = () => StoreState
