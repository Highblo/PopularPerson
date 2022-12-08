<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "../store/personsList";

const personsListStore = useStore();
const { personsList } = storeToRefs(personsListStore);
const popularPerson = ref("");
const count = ref(1);

const addPopularPerson = () => {
  if (popularPerson.value === "") return;
  let personInfo = {
    person: popularPerson.value,
    count: count.value,
  };
  const res = personsList.value.map((personInfo) => personInfo.person);
  const index = res.indexOf(popularPerson.value);
  if (index >= 0) {
    personsList.value[index].count++;
  } else {
    personsList.value.push(personInfo);
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
  color: #555;
  background-color: white;
  padding: 4px;
  border: 1px solid #555;
  border-radius: 4px;
  margin-right: 16px;
  outline: none;
}
button {
  background-color: #86FDE8;
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
