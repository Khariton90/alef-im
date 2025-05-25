<template>
	<form class="form" v-if="data" @submit.prevent="handleSubmit">
		<fieldset class="fieldset">
			<h2 class="subtitle medium-text">Персональные данные</h2>
			<InputField
				type="text"
				:id="`name-${data.parent.id}`"
				title="Имя"
				v-model:value="data.parent.name"
			/>
			<InputField
				type="number"
				:id="`age-${data.parent.id}`"
				title="Возраст"
				v-model:value="data.parent.age"
			/>
		</fieldset>
		<CreateChildren :children="data.children" />

		<fieldset class="fieldset row" v-for="child of data.children">
			<InputField
				type="text"
				:id="`name-${child.id}`"
				title="Имя"
				v-model:value="child.name"
			/>
			<InputField
				type="number"
				:id="`age-${child.id}`"
				title="Возраст"
				v-model:value="child.age"
			/>
			<DeleteChildren :id="child.id" />
		</fieldset>
		<div class="form-button">
			<Button title="Сохранить" variant="contained" />
		</div>
	</form>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { InputField, Button } from '~/shared/ui'
import { DeleteChildren } from '~/features/DeleteChildren'
import type { PersonalData } from '~/shared/model'
import { CreateChildren } from '~/features/CreateChildren'
import { useRouter } from 'vue-router'

const router = useRouter()
const data = inject<PersonalData | undefined>('personalData', undefined)

const handleSubmit = () => {
	router.push('/alef-im/preview')
}
</script>

<style lang="css">
.label {
	display: flex;
	flex-direction: column;
	border: 1px solid #f1f1f1;
	gap: 2px;
	padding: 8px 16px;
	border-radius: 4px;
	flex: 1;

	& span {
		color: var(--gray-color);
		font-size: 13px;
	}

	& input {
		font-size: 14px;
	}
}

.fieldset {
	display: flex;
	flex-direction: column;
	border: none;
	padding: 0;
	margin: 0;
	row-gap: 10px;
	margin-bottom: 10px;
	&.row {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		column-gap: 18px;
	}
}

.fieldset:nth-child(2) {
	margin: 33px 0 11px;
}

.form-button {
	margin-top: 30px;
}
</style>
