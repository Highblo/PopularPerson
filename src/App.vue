<script setup>
import { ref } from "vue";

const personsList = ref([]);
const fashionablePerson = ref("");
const number = ref(0);
const addPerson = () => {
  if (fashionablePerson.value === "") return;
  let personInfo = {
    person: fashionablePerson.value,
    count: number.value
  }
  number.value++;
  personsList.value.push(personInfo);
  fashionablePerson.value = "";
};
</script>

<template>
  <div class="top">
    <h1>流行人</h1>
    <p>現在誰が流行っているか一目で分かるアプリです。</p>
    <p>自分の中で話題になっている人を投稿してみよう！</p>
    <br />
    <form @submit.prevent>
      <input type="text" v-model="fashionablePerson" />
      <v-btn color="secondary" @click="addPerson">投稿</v-btn>
    </form>
  </div>
  <div class="container">
    <ul>
      <li v-for="person in personsList">
        <p>{{ person.person }}: {{ person.count }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.top {
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  padding: 4px;
  border-radius: 3px;
  margin-right: 12px;
  background-color: white;
  outline: none;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
li {
  background-color: aquamarine;
  padding: 8px;
  border-radius: 4px;
  color: black;
  list-style: none;
  margin-bottom: 16px;
}
</style>
