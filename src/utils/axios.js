import axios from "axios"

const service = (config) => {
	const instance = axios.create({
		baseURL: "",
		timeout: 10 * 1000,
		withCredentials: true,
		...config
	})
	// 请求拦截器
	instance.interceptors.request.use(
		(config) => {
			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)
	// 响应拦截器
	instance.interceptors.response.use(
		(config) => {
			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)
	return instance
}

export default service()
