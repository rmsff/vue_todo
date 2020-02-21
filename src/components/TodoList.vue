<template>
	<ul>
		<TodoItem v-for="item in filteredTodos" v-bind:item="item" :key="item.id" />
	</ul>
</template>

<script>
import { TodoItem } from './';
import { mapGetters } from 'vuex';

export default {
	name: 'TodoList',
	components: {
		TodoItem,
	},
	computed: {
		...mapGetters(['filteredTodos']),
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 20px 0 0 0;
	padding: 0;
}
</style>
