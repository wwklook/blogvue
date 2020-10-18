import axios from 'axios'

export function requests(config) {
    const instance = axios.create({
            baseURL: "http://116.62.71.162/",
            timeout: 5000,
        })
        //   instance.interceptors.response.use(res => {
        //     return res.data
        //   })
    return instance(config)
}