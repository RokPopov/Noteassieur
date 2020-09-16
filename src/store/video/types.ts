import { constants } from "http2"

export const STORE_CURTIME = "STORE_CURTIME"

type StoreCurtime = {
  type: typeof STORE_CURTIME
  curtime: string
}

export type myVideoActionTypes = StoreCurtime
