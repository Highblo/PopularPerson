<script setup>
import AppHeading from "./components/AppHeading.vue";
import AppNav from "./components/AppNav.vue";
import AppRanks from "./components/AppRanks.vue";
import InputButton from "./components/InputButton.vue";
import PersonsList from "./components/PersonsList.vue";
</script>

<template>
  <div class="top">
    <AppNav />
    <div class="side">
      <div class="side-top">
        <AppHeading />
        <InputButton />
        <hr>
      </div>
      <div class="side-bottom">
        <AppRanks />
        <PersonsList />
      </div>
    </div>
  </div>
</template>

<style scoped>
.top {
  display: flex;
  min-height: 100vh;
}
.side {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2%;
}
hr {
  margin: 2rem;
}
.side-top {
  flex: 0.6;
  text-align: center;
}
.side-bottom {
  flex: 1.4;
}
</style>
