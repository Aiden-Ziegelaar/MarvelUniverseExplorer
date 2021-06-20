import {insertApiKey} from "./insertApiKey";
import {AxiosRequestConfig} from "axios";

test("Should insert Api key into config with existing params", () => {
    const config: AxiosRequestConfig = {
      params: {
        test: "TestValue"
      }
    }
    const output = insertApiKey(config);
    expect(output.params.apikey).toBe(process.env.REACT_APP_MARVEL_API_PUB_KEY)
  }
)

test("Should insert Api key into config with no existing params", () => {
    const config: AxiosRequestConfig = {}
    const output = insertApiKey(config);
    expect(output.params.apikey).toBe(process.env.REACT_APP_MARVEL_API_PUB_KEY)
  }
)