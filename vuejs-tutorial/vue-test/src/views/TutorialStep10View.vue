<script setup lang="ts">
import { ref, watch } from 'vue';

const todoId = ref(1);
const todoData = ref(null);

const fetchData = async () => {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}
fetchData();
watch(todoId, fetchData);
</script>

<template>
  <p>step 10: ウォッチャー</p>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <p v-else>{{ todoData }}</p>
</template>