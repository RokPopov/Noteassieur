export type Canvas = {
  width: number
  height: number
}

export type Note = {
  id: number
  content: string
}

export type Timenote = {
  id: number
  timeIn: number
  timeOut: number
  notes: Note[]
}
