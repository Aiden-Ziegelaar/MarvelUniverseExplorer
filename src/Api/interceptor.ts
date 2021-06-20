import axios, {AxiosRequestConfig} from "axios";
import {insertApiKey} from "./insertApiKey"

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 30000,
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(insertApiKey)

export const api = instance;