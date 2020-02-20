<template>
	<form @submit.prevent="onSubmit">
		<input type="text" placeholder="Enter text" v-model="textInput" />
		<button type="submit">Create</button>
	</form>
</template>

<script>
export default {
	name: 'AddItem',
	data: () => ({ textInput: '' }),
	methods: {
		onSubmit() {
			if (this.textInput.length) {
				const newItem = {
					id: 'id',
					title: this.textInput,
					completed: false,
				};
				this.$emit('add', newItem);
				this.textInput = '';
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
