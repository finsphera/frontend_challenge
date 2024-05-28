import { IMovieData } from "@/types/Movies"

export const checkStatus = (resp: any) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp.json ? resp.json() : resp
  } else {
    throw new Error(resp)
  }
}

export const Random = (array: IMovieData[]) => {
  return array[Math.floor(Math.random() * array.length - 1)]
}
