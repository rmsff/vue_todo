<template>
	<div id="todos">
		<img
			class="logo"
			src="https://res.cloudinary.com/serikoff/image/upload/v1581966959/logo_xtgd4b.png"
			alt="logo"
		/>
		<h1>Todo list</h1>
		<router-link to="/home">Home page</router-link>
		<AddItem />
		<select v-if="!isLoading && filteredTodos.length" @change="handleFilter">
			<option value="all">all</option>
			<option value="completed">completed</option>
			<option value="notCompleted">not completed</option>
		</select>
		<p v-if="filter === 'all'">Total records: {{ filteredTodos.length }}</p>
		<p v-else>Records selected: {{ filteredTodos.length }} ({{ countTodos }})</p>
		<a-spin v-if="isLoading" size="large" tip="Loading..." />
		<TodoList v-if="filteredTodos.length" />
		<a-empty
			v-else-if="!isLoading"
			image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
		>
			<span slot="description">No records</span>
		</a-empty>
	</div>
</template>

<script>
import { TodoList } from '../components';
import { AddItem } from '../components';
import { mapGetters } from 'vuex';
export default {
	name: 'Todos',
	components: {
		TodoList,
		AddItem,
	},
	computed: {
		...mapGetters(['isLoading', 'filter', 'filteredTodos', 'countTodos']),
	},
	mounted() {
		if (!this.$store.getters.countTodos) {
			this.$store.dispatch('fetchTodos');
			this.isFirstFetchData = false;
		}
	},
	methods: {
		handleFilter(event) {
			this.$store.commit('setFilter', event.target.value);
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
	p {
		margin-top: 10px;
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
