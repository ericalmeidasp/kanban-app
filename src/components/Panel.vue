<script setup>
import Coluna from './Coluna.vue';

defineProps({
  id: String
})

const colunas = [
	{
		"id": "2e3d3aec-bb7e-4386-96cb-bb000fcea910#ec123c0a-8c59-4e59-9245-efab6b5c7b3a",
		"tipo": "coluna",
		"name": "Coluna Kanban Novo",
		"cor": "#FFFFFF",
		"ordem": 1,
		"limite": 5
	},
	{
		"id": "e45d6312-383b-49e9-bee5-f1ac1d5ff2e2#c5b08b10-8734-474a-99ef-8c5282f8b8cd",
		"tipo": "coluna",
		"name": "Coluna Novo 3",
		"cor": "#FFFFFF",
		"ordem": 2,
		"limite": 5
	}
]

</script>

<template>
  <div class="flex w-full mt-10">

    <Coluna v-for="coluna in colunas" :coluna=coluna></Coluna>

  </div>
</template>

<style scoped>
.mover {
  cursor: move;
}
</style>
