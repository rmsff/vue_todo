<template>
	<form @submit.prevent="handleCreate">
		<input type="text" placeholder="Enter text" v-model="textInput" />
		<button type="submit">Create</button>
	</form>
</template>

<script>
import uniqueId from '../utils/helpers/uniqueId';

export default {
	name: 'AddItem',
	data: () => ({ textInput: '' }),
	methods: {
		handleCreate() {
			if (this.textInput) {
				const newRecord = {
					id: uniqueId('', this.$store.getters.countTodos),
					title: this.textInput,
					completed: false,
				};
				this.textInput = '';
				this.$store.commit('updateTodos', [newRecord]);
			}
		},
	},
};
</script>

<style scoped>
form {
	display: flex;
	justify-content: center;
	margin-top: 20px;
}
input {
	width: 400px;
	height: 40px;
	font-size: 20px;
	border-radius: 5px;
	border: 1px solid #ccc;
	margin-right: 5px;
}
button {
	border-radius: 5px;
	font-size: 20px;
}
</style>
