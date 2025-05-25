<template>
	<section class="personal-data" v-if="data">
		<div class="child-container">
			<h1 class="subtitle medium-text">Персональные данные</h1>
			<p class="person bold-text">
				{{ data.parent.name }}, {{ data.parent.age }} лет
			</p>
		</div>
		<ChildrenList :children="data.children" />
	</section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { ChildrenList } from '~/widgets/ChildrenList'
import type { PersonalData } from '~/shared/model'

const data = inject<PersonalData | undefined>('personalData', undefined)
</script>

<style>
.child-container:first-child {
	margin-bottom: 60px;
}

.child-container,
.child-list {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.list-item span {
	display: inline-block;
	background-color: #f1f1f1;
	border-radius: 5px;
	padding: 10px 20px;
}
</style>
