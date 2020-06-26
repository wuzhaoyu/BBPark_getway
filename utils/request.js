import axios from 'axios'
import {getUser} from '@/utils/auth'
// 创建axios实例
const service = axios.create({
    baseURL: 'http://127.0.0.1:9011/', // api的base_url
    timeout: 30000, // 请求超时时间
    headers: { 'Authorization':  "Bearer "+getUser().token,'request-type': 'getway' }
  })
export default service