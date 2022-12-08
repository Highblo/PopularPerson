<template>
  <div class="AppHeading">
    <h1 class="heading">PopularPerson</h1>
    <p>現在誰が流行っているか一目で分かるアプリです。</p>
    <p>自分の中で話題になっている人を投稿してみよう！</p>
    <p class="note">※苗字と名前の間にスペースを入れないで下さい。</p>
  </div>
</template>

<style scoped>
.AppHeading {
  text-align: center;
}
.heading {
  font-size: 3.5em;
  color: #ACB6E5;
  display: inline-block;
  background: linear-gradient(90deg, #ACB6E5, #86FDE8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}
p:not(.note) {
  margin-bottom: 4px;
}
.note {
  font-size: 0.8rem;
  margin-bottom: 12px;
}
</style>
