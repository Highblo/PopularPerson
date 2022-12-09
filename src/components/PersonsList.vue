<script setup>
import { useStore } from "../store/personsList";
import { storeToRefs } from "pinia";

const personsListStore = useStore();
const { personsList } = storeToRefs(personsListStore);
</script>

<template>
  <ul>
    <li v-for="personInfo in personsList">
      <div class="image">
        <div>
          <img :src="personInfo.image" :alt="personInfo.person" />
        </div>
      </div>
      <div class="info">
        <p>名前: <span class="name">{{ personInfo.person }}</span></p>
        <p>投票数: <span class="name">{{ personInfo.count }}</span></p>
        <hr>
        <v-btn @click="personInfo.count++" color="secondary">投票する</v-btn>
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
}
li {
  width: 25%;
  padding: 16px;
  box-shadow: 0 0 6px #666;
  border-radius: 6px;
}
img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}
.info {
  padding: 8px;
}
.name {
  font-size: 1.2rem;
  font-weight: bold;
}
hr {
  margin: 12px 0;
}
</style>
