<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import axios from "axios";
import { useStore } from "../store/personsList";

const personsListStore = useStore();
const { personsList } = storeToRefs(personsListStore);
const popularPerson = ref("");
const count = ref(1);
let imageUrl = ref("");

const addPopularPerson = () => {
  if (popularPerson.value === "") return;
  let personInfo = {
    person: popularPerson.value,
    count: count.value,
    image: imageUrl.value,
  };
  const res = personsList.value.map((personInfo) => personInfo.person);
  const index = res.indexOf(popularPerson.value);
  if (index >= 0) {
    personsList.value[index].count++;
  } else {
    const url = "https://www.googleapis.com/customsearch/v1?" +
    "key=AIzaSyA-bjTQAVwaqfzx_L5IPWYdJTfK5hehUjk" +
    "&cx=03579afab95704f87" +
    "&searchType=image" +
    "&q=齋藤飛鳥 画像 高画質";
    axios
      .get(url)
      .then((res) => imageUrl.value = res.data.items[2].image.thumbnailLink);
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
