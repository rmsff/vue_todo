<template>
	<ul>
		<TodoItem
			v-for="item in todos"
			v-bind:item="item"
			:key="item.id"
			@remove="removeItem"
			@complete="completeItem"
		/>
	</ul>
</template>

<script>
import { TodoItem } from './';

export default {
	components: {
		TodoItem,
	},
	props: {
		todos: {
			type: Array,
			required: true,
		},
	},
	methods: {
		removeItem(id) {
			this.$emit('remove', id);
		},
		completeItem(item) {
			this.$emit('complete', item);
		},
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
