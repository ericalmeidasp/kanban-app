<script setup>
import Card from './Card.vue';

</script>

<template>
  <div class="flex w-full">
    <div class="grid h-150 flex-grow card bg-base-300 rounded-box place-items-center">
      <Card card-text="oi" card-title="Hello"></Card>
      <Card card-text="oi" card-title="Hello" class="m-3"></Card>
    </div>
    <div class="divider divider-horizontal"></div>
    <div class="grid h-150 flex-grow card bg-base-300 rounded-box place-items-center">
      <Card card-text="oi" card-title="Hello"></Card>
    </div>
    <div class="divider divider-horizontal"></div>
    <div class="grid h-150 flex-grow card bg-base-300 rounded-box place-items-center">
      <Card card-text="oi" card-title="Hello"></Card>
    </div>
  </div>
</template>

<style scoped></style>
