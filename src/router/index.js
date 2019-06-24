import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Form from '@/components/Form'
import Form_2 from '@/components/Form_2'
import Ionic_1 from '@/components/Ionic_1'
import singlepost from '@/components/singlepost'







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
		{
			path: '/ionic_1',
			name: 'Ionic_1',
			component: Ionic_1
		},
		{
			path: '/todo/:todoid',
			name: 'singlepost',
			component: singlepost,
			props: true,
		}
	]
})


export default router