import { createWebHistory, createRouter } from 'vue-router'
import { HomePage } from '~/pages/HomePage'
import { PreviewPage } from '~/pages/PreviewPage'

const routes = [
	{
		path: '/alef-im',
		component: HomePage,
	},
	{
		path: '/alef-im/preview',
		component: PreviewPage,
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
