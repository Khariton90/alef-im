import { createWebHistory, createRouter } from 'vue-router'
import { HomePage } from '~/pages/HomePage'
import { PreviewPage } from '~/pages/PreviewPage'

const routes = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/preview',
		component: PreviewPage,
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
