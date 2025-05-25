<template>
	<Button title="Удалить" @click.prevent="deleteChildren(id)"> </Button>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import type { PersonalData } from '~/shared/model'
import { Button } from '~/shared/ui'

type Props = {
	id: string
}

const { id } = defineProps<Props>()
const data = inject<PersonalData | undefined>('personalData', undefined)

const deleteChildren = (id: string) => {
	if (data) {
		data.children = data.children.filter(child => child.id !== id)
	}
}
</script>

<style scoped></style>
