import { Appstore, Timenote, Video } from "../global"

export type StoreState = {
  timenotes: Timenote[]
  video: Video
  appstore: Appstore
}

export type GetState = () => StoreState
