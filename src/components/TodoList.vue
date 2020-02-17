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
	props: ['todos'],
	components: {
		TodoItem,
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
