<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "../store/personsList";

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
        <p>名前：<span class="strong">{{ personInfo.person }}</span></p>
        <p>投票数：<span class="strong">{{ personInfo.count }}</span></p>
        <hr>
        <div class="btnflex">
          <v-btn @click="personInfo.count++" color="secondary">投票する</v-btn>
          <v-btn color="blue">コメントを書く</v-btn>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5rem;
  padding: 3rem;
}
li {
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
.strong {
  font-size: 1.2rem;
  font-weight: bold;
}
.btnflex {
  display: flex;
  justify-content: space-between;
}
hr {
  margin: 12px 0;
}
</style>
