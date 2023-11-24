import { createWebHashHistory, createRouter } from "vue-router"

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("@/views/myLogin.vue")
		}
	]
})

export default router
