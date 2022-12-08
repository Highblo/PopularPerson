<template>
  <nav>
    <h1 class="heading">PopularPerson</h1>
    <ul>
      <li>女優</li>
      <li>俳優</li>
      <li>アーティスト</li>
      <hr>
      <li>Twitter</li>
      <li>Github</li>
      <hr>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  width: 250px;
  padding: 24px;
}
.heading {
  color: #ACB6E5;
  display: inline-block;
  background: linear-gradient(90deg, #ACB6E5, #86FDE8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
}

li {
  padding: 8px 12px;
  color: #fff;
  border-radius: 10px;

}
li:hover {
  background-color: #444;
}
hr {
  margin: 12px 0;
}
</style>
