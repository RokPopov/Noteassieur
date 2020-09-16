import { constants } from "http2";

export const STORE_CURTIME = "STORE_CURTIME";
export const STORE_TOTALTIME = "STORE_TOTALTIME";
export const STORE_CURVIDEO = "STORE_CURVIDEO";

type StoreCurtime = {
  type: typeof STORE_CURTIME;
  curtime: string;
};

type StoreTotalTime = {
  type: typeof STORE_TOTALTIME;
  totaltime: string;
};

type StoreCurVideo = {
  type: typeof STORE_CURVIDEO;
  curvideo: string;
};

export type myVideoActionTypes = StoreCurtime | StoreTotalTime | StoreCurVideo;
