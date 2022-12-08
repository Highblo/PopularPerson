<script setup>
import { useStore } from "../store/personsList"
import { storeToRefs } from "pinia";

const personsListStore = useStore();
const { personsList } = storeToRefs(personsListStore)
</script>

<template>
  <ul>
    <li v-for="personInfo in personsList">
      <p>{{ personInfo.person }}: {{ personInfo.count }}</p>
    </li>
  </ul>
</template>

<style scoped>
li {
  background-color: aquamarine;
  padding: 8px;
  border-radius: 4px;
  color: black;
  margin-bottom: 16px;
}
</style>