import { OPTIONS } from "@/utils/constants";
import { checkStatus } from "@/utils/helpers";
import axios from "axios";

export async function insecureFetchFromAPI(path: string) {
  return await axios
    .get(path, OPTIONS)
    .then(checkStatus)
    .catch((error) => error)
}
