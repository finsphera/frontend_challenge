export const checkStatus = (resp: any) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp.json ? resp.json() : resp
  } else {
    throw new Error(resp)
  }
}
