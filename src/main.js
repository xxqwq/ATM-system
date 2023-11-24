import { createApp } from "vue"
import App from "@/App.vue"
import pinia from "@/store"
import router from "@/router"
// 路由守卫
import "@/router/guard/guard.js"
// 组件库图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.use(router).use(pinia).mount("#app")
