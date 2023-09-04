<script setup>
import Card from './Card.vue';

defineProps({
  coluna: Object
})

const tarefas = [
	{
		"id": "e45d6312-383b-49e9-bee5-f1ac1d5ff2e2#c5b08b10-8734-474a-99ef-8c5282f8b8cd#50d36835-268f-4197-b3a4-7422a1fa448d",
		"tipo": "tarefa",
		"titulo": "Tarefa a executar 3",
		"descricao": "Finalizar a API utilizando o DynamoDB",
		"prioridade": "ALTA",
		"criacao": "2023-08-09T23:44:11.527310133",
		"previsao": "2023-08-10T02:44:11.452",
		"conclusao": null
	},
	{
		"id": "e45d6312-383b-49e9-bee5-f1ac1d5ff2e2#c5b08b10-8734-474a-99ef-8c5282f8b8cd#67892606-b93d-404e-a0e5-b91361fbdbda",
		"tipo": "tarefa",
		"titulo": "Tarefa a executar 3",
		"descricao": "Finalizar a API utilizando o DynamoDB",
		"prioridade": "ALTA",
		"criacao": "2023-08-09T23:31:59.054796182",
		"previsao": "2023-08-10T02:31:23.552",
		"conclusao": null
	},
	{
		"id": "e45d6312-383b-49e9-bee5-f1ac1d5ff2e2#c5b08b10-8734-474a-99ef-8c5282f8b8cd#84974157-bab3-42bb-9fa0-349581a3030d",
		"tipo": "tarefa",
		"titulo": "Tarefa a executar 3",
		"descricao": "Finalizar a API utilizando o DynamoDB",
		"prioridade": "ALTA",
		"criacao": "2023-08-09T23:32:48.945342846",
		"previsao": "2023-08-10T02:32:48.474",
		"conclusao": null
	},
	{
		"id": "e45d6312-383b-49e9-bee5-f1ac1d5ff2e2#c5b08b10-8734-474a-99ef-8c5282f8b8cd#9b6f5609-105f-45fa-b562-4486cd5989cf",
		"tipo": "tarefa",
		"titulo": "Tarefa a executar 3",
		"descricao": "Finalizar a API utilizando o DynamoDB",
		"prioridade": "ALTA",
		"criacao": "2023-08-09T23:31:24.058049961",
		"previsao": "2023-08-10T02:31:23.552",
		"conclusao": null
	}
]

</script>

<template>
    <div class="grid h-150 flex-grow card bg-base-300 rounded-box place-items-center mx-1">
      <h2 class="text-2xl font-bold mt-3">{{ coluna.name }}</h2>
      <Card v-for="tarefa in tarefas" :card-text=tarefa.descricao :card-title=tarefa.titulo :card-id=tarefa.id class="m-3"></Card>
    </div>
</template>

<style scoped>
</style>
