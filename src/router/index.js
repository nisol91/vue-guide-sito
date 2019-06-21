import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Form from '@/components/Form'
import Form_2 from '@/components/Form_2'





Vue.use(Router)

let router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/form',
			name: 'Form',
			component: Form
		},
		{
			path: '/form_2',
			name: 'Form_2',
			component: Form_2
		},
	]
})


export default router