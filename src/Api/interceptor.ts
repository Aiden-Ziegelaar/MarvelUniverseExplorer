import axios, {AxiosRequestConfig} from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_ENDPOINT,
  timeout: 30000,
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use((config) => {
  config.params = {...config.params, apikey: process.env.REACT_APP_MARVEL_API_PUB_KEY}
  return config
})

module.exports = {api: instance}