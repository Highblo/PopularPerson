<script setup>
import InputButton from "./components/InputButton.vue";
import PersonsList from "./components/PersonsList.vue";
</script>

<template>
  <div class="top">
    <h1>流行人</h1>
    <p>現在誰が流行っているか一目で分かるアプリです。</p>
    <p>自分の中で話題になっている人を投稿してみよう！</p>
    <br />
    <InputButton />
  </div>
  <div class="container">
    <PersonsList />
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
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
