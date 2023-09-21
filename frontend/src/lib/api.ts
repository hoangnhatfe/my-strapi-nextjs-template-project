import { Payload } from "@/types/Payload"
import { fetchAPI } from "./fetch-api"
import { GlobalSetting } from "@/types/api/GlobalSetting"

export const getGlobalSetting = async () => {
  const requestQuery = {
    populate: {
      seo: {populate: "*"},
    }
  }
  const res: Payload<GlobalSetting> = await fetchAPI('/global-setting', requestQuery)
  return res
}