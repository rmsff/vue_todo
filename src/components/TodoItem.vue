<template>
	<div>
		<li>
			<div
				:class="{ item: true, item_done: item.completed }"
				@click="$emit('complete', item)"
			>
				<input type="checkbox" v-model="item.completed" true-checked="checked" />
				<strong>{{ ` ${item.id}: ` }}</strong>
				<span>
					Todo item: {{ item.title | itemUpperCase }}, completed:
					{{ `${item.completed} ` }}
				</span>
			</div>
			<button class="item__button-rm" @click="$emit('remove', item.id)">
				&times;
			</button>
		</li>
	</div>
</template>

<script>
export default {
	name: 'TodoItem',
	props: {
		item: {
			type: Object,
			required: true,
		},
		index: Number,
	},
	filters: {
		itemUpperCase(str) {
			return str.toUpperCase();
		},
	},
};
</script>

<style lang="scss" scoped>
li {
	border-radius: 5px;
	border: 1px solid#ccc;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 2rem;
	margin-bottom: 1rem;
	div {
		input {
			position: relative;
			top: -3px;
		}
		strong {
			margin-left: 4px;
		}
	}
}
.item__button-rm {
	border-radius: 3px;
	max-height: 33px;
}
.item_done {
	text-decoration: line-through;
}
</style>
