import Vue from 'vue';
import Router from 'vue-router';
import { Home } from './views';

Vue.use(Router);

export default new Router({
	mode: 'hash',
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			name: 'home',
			path: '/home',
			component: Home,
		},
		{
			name: 'todos',
			path: '/todos',
			component: () => import('./views/Todos.vue'),
		},
	],
});
