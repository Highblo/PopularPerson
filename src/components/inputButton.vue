<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { collection, getDocs } from "@firebase/firestore";
import { useStore } from "../store/personsList";
import { db } from "../firebase";

const personsListStore = useStore();
const { popularPerson, personsList } = storeToRefs(personsListStore);
const { addPopularPerson } = personsListStore;

onMounted(() => {
  const data = collection(db, "users");
  getDocs(data).then((snapshot) => {
    personsList.value = snapshot.docs.map((doc) => doc.data());
  });
});
</script>

<template>
  <form>
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
