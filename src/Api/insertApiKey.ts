import {AxiosRequestConfig} from "axios";

export const insertApiKey:
  ((value: AxiosRequestConfig) => AxiosRequestConfig) =
  (config: AxiosRequestConfig) => {
    config.params = {...config.params, apikey: process.env.REACT_APP_MARVEL_API_PUB_KEY}
    return config
}