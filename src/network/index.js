import axios from 'axios'

export function requests(config) {
  const instance = axios.create({
    baseURL: "http://118.126.91.79/",
    // baseURL: "http://127.0.0.1:8000/",
    timeout: 10000,
  })
  //   instance.interceptors.response.use(res => {
  //     return res.data
  //   })
  return instance(config)
}
