<script setup>

</script>

<template>
  <nav>
    <div class="container">
      <h1 class="heading">PopularPerson</h1>
      <ul>
        <li>女優</li>
        <li>俳優</li>
        <li>アーティスト</li>
        <hr />
        <li class="youtube">
          <a href="#"> Youtube </a>
        </li>
        <li class="twitter">
          <a href="https://twitter.com/harufront_515"> Twitter </a>
        </li>
        <li class="github">
          <a href="https://github.com/Highblo"> Github </a>
        </li>
        <hr />
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  width: 250px;
  padding: 24px;
}
.container {
  position: sticky;
  top: 24px;
  left: 0;
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
li:not(.youtube, .twitter, .github):hover {
  background-color: #444;
}

hr {
  margin: 16px 0;
}

a {
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative;
  transition: all 0.3s;
}

.youtube {
  background: linear-gradient(90deg, white, #ff0000);
  position: relative;
  transition: all 0.3s ease-out;
}
.twitter {
  background: linear-gradient(90deg, rgb(251, 252, 252), #1da1f2);
  margin: 16px 0;
  position: relative;
  transition: all 0.3s ease-out;
}
.github {
  background: linear-gradient(90deg, white, black);
  position: relative;
  transition: all 0.3s ease-out;
}

.youtube:hover a {
  color: #ff0000;
}
.twitter:hover a {
  color: #1da1f2;
}
.github:hover a {
  color: #000;
}

.twitter::before,
.github::before,
.youtube::before {
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
  background: linear-gradient(90deg, #1da1f2, rgb(251, 252, 252));
}
.github::before {
  background: linear-gradient(90deg, black, white);
}
.youtube::before {
  background: linear-gradient(90deg, #ff0000, white);
}

.twitter:hover::before,
.github:hover::before,
.youtube:hover::before {
  opacity: 0;
}
</style>
