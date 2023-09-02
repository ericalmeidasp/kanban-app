<script setup>
defineProps({
  cardTitle: String,
  cardText: String
})
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{{ cardTitle }}</h2>
    <p>{{ cardText }}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Comentar</button>
      <button class="btn btn-primary">Expandir</button>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
