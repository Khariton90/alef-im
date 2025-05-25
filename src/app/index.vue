<script setup lang="ts"></script>

<template>
	<LayoutHeader />
	<main class="main">
		<div class="container">
			<RouterView />
		</div>
	</main>
	<LayoutFooter />
</template>

<script lang="ts" setup>
import { provide, reactive } from 'vue'
import { LayoutFooter } from '~/widgets/LayoutFooter'
import { LayoutHeader } from '~/widgets/BaseLayoutHeader'
import type { PersonalData } from '~/shared/model'

const data = reactive<PersonalData>({
	parent: {
		id: new Date().getTime().toString(),
		name: 'Петр',
		age: 99,
	},
	children: [],
})

provide('personalData', data)
</script>

<style scoped>
.main {
	& .container {
		width: clamp(375px, 100%, 650px);
		padding: 30px 0;
	}
}
</style>
