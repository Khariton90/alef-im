<template>
	<button :type="type || 'submit'" class="button" :class="variant || 'text'">
		<slot />
		{{ title }}
	</button>
</template>

<script lang="ts" setup>
type Props = {
	title: string
	variant?: 'outlined' | 'contained'
	type?: 'button' | 'submit' | 'reset'
}

const { variant, type } = defineProps<Props>()
</script>

<style scoped>
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 4px;
	padding: 10px 20px;
	font-size: 14px;
	font-weight: 400;
	border-radius: 100px;
	cursor: pointer;
	background: none;
}

.contained {
	background: var(--primary-color);
	color: var(--white-color);
}

.outlined {
	color: var(--primary-color);
	border: 2px solid var(--primary-color);
}

.text {
	color: var(--primary-color);
	padding: 0;
}
</style>
