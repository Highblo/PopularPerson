<script setup>
</script>

<template>
  <nav>
    <h1 class="heading">PopularPerson</h1>
    <ul>
      <li>女優</li>
      <li>俳優</li>
      <li>アーティスト</li>
      <hr />
      <li class="youtube"><span>Youtube</span></li>
      <li class="twitter"><span>Twitter</span></li>
      <li class="github"><span>Github</span></li>
      <hr />
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
  color: #acb6e5;
  display: inline-block;
  background: linear-gradient(90deg, #acb6e5, #86fde8);
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
li:not(.twitter, .github):hover {
  background-color: #444;
}

hr {
  margin: 16px 0;
}

.twitter {
  background: linear-gradient(90deg, rgb(251, 252, 252), #1DA1F2);
  margin: 16px 0;
  position: relative;
  transition: all 0.3s ease-out;
}
.github {
  background: linear-gradient(90deg, white, black);
  position: relative;
  transition: all 0.3s ease-out;
}
.youtube {
  background: linear-gradient(90deg, white, #FF0000);
  position: relative;
  transition: all 0.3s ease-out;
}

.twitter:hover {
  color: #1DA1F2;
}
.github:hover {
  color: #000;
}
.youtube:hover {
  color: #FF0000;
}

.twitter span, .github span, .youtube span {
  position: relative;
}

.twitter::before, .github::before, .youtube::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 0.3s ease-out;
}
.twitter::before {
  background: linear-gradient(90deg, #1DA1F2, rgb(251, 252, 252));
}
.github::before {
  background: linear-gradient(90deg, black, white);
}
.youtube::before {
  background: linear-gradient(90deg, #FF0000, white);
}

.twitter:hover::before, .github:hover::before, .youtube:hover::before {
  opacity: 0;
}
</style>
