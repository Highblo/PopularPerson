<script setup>
import { useStore } from "../store/personsList"
const personsListStore = useStore();
const personsList = personsListStore.personsList;
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
  list-style: none;
  margin-bottom: 16px;
}
</style>