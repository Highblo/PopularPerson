<script setup>
import { ref } from "vue";
import { useStore } from "../store/personsList"

const personsListStore = useStore();
const personsList = personsListStore.personsList;
const popularPerson = ref("");
const count = ref(1);

const addPopularPerson = () => {
  if (popularPerson.value === "") return;
  let personInfo = {
    person: popularPerson.value,
    count: count.value,
  };
  const res = personsList.map((personInfo) => personInfo.person);
  const index = res.indexOf(popularPerson.value);
  if (index >= 0) {
    personsList[index].count++;
  } else {
    personsList.push(personInfo);
  }
  popularPerson.value = "";
};
</script>

<template>
  <form @submit.prevent>
    <input type="text" v-model="popularPerson" />
    <button @click="addPopularPerson">投稿</button>
  </form>
</template>

<style scoped>
input {
  padding: 4px;
  border-radius: 3px;
  margin-right: 12px;
  background-color: white;
  outline: none;
}
</style>
