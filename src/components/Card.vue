<script setup>
import CardChat from './CardChat.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { count, doubleCount } = storeToRefs(store)
const { increment } = store

defineProps({
  cardTitle: String,
  cardText: String,
  cardId: String
})
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{{ cardTitle }}</h2>
      <p>{{ cardText }}</p>
      <div class="card-actions justify-end">
        <!-- The button to open modal -->
        <label :for="`my_modal_${cardId}`" class="btn btn-primary">Comentar</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" :id="`my_modal_${cardId}`" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Mensagens:</h3>
            <CardChat></CardChat>
            <div class="modal-action">
              <label :for="`my_modal_${cardId}`" class="btn">Close!</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
