<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

let ids = new Array();
for (let i=2; i<13; ++i) ids.push(i);

</script>

<template>
  <div class="tutorial">
    <h1>This is a tutorial page</h1>
    <a href="https://ja.vuejs.org/tutorial/">Vue.js tutorial link</a>
    <hr />
    <div class="tutorial-wrapper">
      <nav>
        <RouterLink to="/tutorial/tutorial2">Step 2</RouterLink>
        <RouterLink to="/tutorial/tutorial3">Step 3</RouterLink>
        <RouterLink to="/tutorial/tutorial4">Step 4</RouterLink>
        <RouterLink to="/tutorial/tutorial5">Step 5</RouterLink>
        <RouterLink to="/tutorial/tutorial6">Step 6</RouterLink>
        <RouterLink to="/tutorial/tutorial7">Step 7</RouterLink>
        <RouterLink to="/tutorial/tutorial8">Step 8</RouterLink>
        <RouterLink to="/tutorial/tutorial9">Step 9</RouterLink>
        <RouterLink to="/tutorial/tutorial10">Step 10</RouterLink>
        <RouterLink to="/tutorial/tutorial11">Step 11</RouterLink>
        <RouterLink to="/tutorial/tutorial12">Step 12</RouterLink>
        <RouterLink to="/tutorial/tutorial13">Step 13</RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>
</template>

<style>
.title {
    color: red;
}
.done {
  text-decoration: line-through;
}
.tutorial-wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>