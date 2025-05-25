<template>
	<div class="child-container">
		<h2 class="subtitle medium-text">Дети</h2>
		<ul class="child-list">
			<li class="list-item bold-text" v-for="child of children" :key="child.id">
				<span> {{ child.name }}, {{ child.age }} лет </span>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import type { Person } from '~/shared/model'
type Props = {
	children: Person[]
}

const { children } = defineProps<Props>()
</script>
