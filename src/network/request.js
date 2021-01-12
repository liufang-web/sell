//引入axios
import axios from 'axios'
//导出request
export function request (config){
  //创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //拦截器,请求拦截
  instance.interceptors.request.use(res => {
    return res
  },error => {
    console.log(error)
    return error
  })
  //发送真正的请求
  return instance(config)
}
