<script setup>
import { useStore } from '../store/personsList';
import { storeToRefs } from 'pinia';

const personsListStore = useStore();
const { popularPerson } = storeToRefs(personsListStore);
const { addPopularPerson } = personsListStore;
</script>

<template>
  <form @submit.prevent>
    <input type="text" v-model="popularPerson" />
    <button @click="addPopularPerson">投票</button>
  </form>
</template>

<style scoped>
input {
  color: #555;
  background-color: white;
  padding: 4px;
  border: 1px solid #555;
  border-radius: 4px;
  margin-right: 16px;
  outline: none;
}
button {
  background-color: #86fde8;
  padding: 6px 12px;
  border-radius: 6px;
  box-shadow: 0 3px 6px #777;
}
button:active {
  position: relative;
  top: 3px;
  box-shadow: none;
}
</style>
