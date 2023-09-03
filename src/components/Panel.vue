<script setup>
import Card from './Card.vue';

</script>

<template>
  <div class="flex w-full mt-10">
    <div class="grid h-150 flex-grow card bg-base-300 rounded-box place-items-center">
      <Card card-text="oi" card-title="Hello" card-id="1" class="mt-3 mb-3"></Card>
    </div>
    <div class="divider divider-horizontal"></div>
    <div class="grid h-150 flex-grow card bg-base-300 rounded-box place-items-center">
      <Card card-text="oi" card-title="Hello" card-id="2" class="mt-3  mb-3"></Card>
    </div>
    <div class="divider divider-horizontal"></div>
    <div class="grid h-150 flex-grow card bg-base-300 rounded-box place-items-center">
      <Card card-text="oi" card-title="Hello" card-id="3" class="mt-3  mb-3"></Card>
    </div>
  </div>
</template>

<style scoped>
.mover {
  cursor: move;
}

</style>
