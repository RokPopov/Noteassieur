import { Timenote, Video } from "../global"

export type StoreState = {
  timenotes: Timenote[]
  video: Video
}

export type GetState = () => StoreState
