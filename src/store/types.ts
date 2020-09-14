import { Note } from "../global"

export type StoreState = {
  note: Note
  notes: Note[]
}

export type GetState = () => StoreState
