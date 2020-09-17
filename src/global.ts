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

export type VideoId = string

export type Video = {
  title: string
  url: VideoId
  lengthOfVid: number
  curTimeOfVideo: number
}

export type Appstore = {
  btnRangeVisible: boolean
  curTimeNoteId: number | null
}
