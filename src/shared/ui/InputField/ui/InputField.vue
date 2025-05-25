<template>
	<label class="label" :for="id"
		><span>{{ title }}</span>
		<input
			v-if="type === 'text'"
			:id="id"
			:type="type"
			required
			:value="value"
			@input="handleChange"
		/>
		<input
			v-else
			:id="id"
			:type="type"
			required
			:value="value"
			min="1"
			max="100"
			@input="handleChange"
		/>
	</label>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

type Props = {
	id: string
	title: string
	type: 'text' | 'number'
	value: string | number
}

const { id, title, value, type } = defineProps<Props>()

const emit = defineEmits(['update:value'])

const handleChange = (event: Event) => {
	const target = event.target as HTMLElement & { value: string }

	if ('value' in target) {
		emit('update:value', target.value)
	}
}
</script>

<style scoped></style>
