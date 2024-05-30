import { IResponseData } from "@/types/Request"

export const checkStatus = (resp: any) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp.json ? resp.json() : resp
  } else {
    throw new Error(resp)
  }
}

export const Random = (array: IResponseData[]) => {
  return array[Math.floor(Math.random() * array.length - 1)]
}

export const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}hr ${remainingMinutes}min`
}
