import axios from 'axios';

export default {
	actions: {
		fetchTodos: async (ctx, limit = 10) => {
			ctx.commit('updateIsLoading', true);
			try {
				const { data } = await axios.get(
					'https://jsonplaceholder.typicode.com/todos?_limit=' + limit
				);
				ctx.commit('updateTodos', data);
				ctx.commit('updateIsLoading', false);
			} catch (err) {
				ctx.commit('updateIsLoading', false);
				console.log(err);
				alert('Error');
			}
		},
	},
	mutations: {
		updateTodos: (state, payload) => (state.todos = [...payload, ...state.todos]),
		removeTodo: (state, id) => (state.todos = state.todos.filter(el => el.id !== id)),
		updateIsLoading: (state, payload) => (state.isLoading = payload),
		setFilter: (state, payload) => (state.filter = payload),
		updateСompletion: (state, item) => (item.completed = !item.completed),
	},
	state: {
		todos: [],
		isLoading: false,
		filter: 'all',
	},
	getters: {
		countTodos: ({ todos }) => todos.length,
		isLoading: ({ isLoading }) => isLoading,
		filter: ({ filter }) => filter,
		filteredTodos: ({ todos, filter }) => {
			if (filter === 'completed')
				return todos.filter(({ completed }) => completed === true);
			if (filter === 'notCompleted')
				return todos.filter(({ completed }) => completed === false);
			return todos.sort(({ completed }) => (completed ? 1 : -1));
		},
	},
};
