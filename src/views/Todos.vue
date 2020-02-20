<template>
	<div id="todos">
		<img
			class="logo"
			src="https://res.cloudinary.com/serikoff/image/upload/v1581966959/logo_xtgd4b.png"
			alt="logo"
		/>
		<h1>Todo list</h1>
		<router-link to="/home">Home page</router-link>
		<AddItem @add="addItem" />
		<select v-if="!this.isLoading && todos.length" v-model="filter">
			<option value="all">all</option>
			<option value="completed">completed</option>
			<option value="notCompleted">not completed</option>
		</select>
		<a-spin v-if="this.isLoading" size="large" tip="Loading..." />
		<TodoList
			v-if="filteredTodos.length"
			:todos="filteredTodos"
			@remove="removeItem"
			@complete="completeItem"
		/>
		<a-empty
			v-else-if="!this.isLoading"
			image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
		>
			<span slot="description">No records</span>
		</a-empty>
	</div>
</template>

<script>
import { TodoList } from '../components';
import { AddItem } from '../components';
import axios from 'axios';
import uniqueId from '../utils/helpers/uniqueId';

export default {
	name: 'Todos',
	components: {
		TodoList,
		AddItem,
	},
	data: () => ({
		todos: [],
		isLoading: false,
		filter: 'all',
	}),
	mounted() {
		this.isLoading = true;
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(({ data }) => {
				this.todos = data.reverse().sort(({ completed }) => (completed ? 1 : -1));
				this.isLoading = false;
			})
			.catch(err => {
				this.isLoading = false;
				console.log(err);
				alert('Error');
			});
	},
	computed: {
		filteredTodos() {
			const { filter, todos } = this;
			if (filter === 'completed')
				return todos.filter(({ completed }) => completed === true);
			if (filter === 'notCompleted')
				return todos.filter(({ completed }) => completed === false);
			return todos;
		},
	},
	methods: {
		removeItem(id) {
			this.todos = this.todos.filter(e => e.id !== id);
		},
		addItem(item) {
			this.todos = [{ ...item, id: uniqueId('', this.todos.length) }, ...this.todos];
		},
		completeItem(item) {
			item.completed = !item.completed;
			this.todos = this.todos.sort(({ completed }) => (completed ? 1 : -1));
		},
	},
};
</script>

<style lang="scss">
#todos {
	padding: 20px;

	.logo {
		width: 10%;
	}
	h1 {
		margin: 10px 0px 0px 0px;
	}
	a {
		margin-bottom: 20px;
	}
	select {
		margin-top: 20px;
	}
	.ant-empty {
		margin-top: 50px;
		.ant-empty-description {
			font-size: 20px;
		}
	}
	.ant-spin {
		margin-top: 100px;
		.ant-spin-text {
			font-size: 20px;
		}
	}
}
</style>
