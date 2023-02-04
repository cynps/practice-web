<script setup lang="ts">
import { ref } from 'vue';

// step 7
let id = 0;
const newTodo = ref('');
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
]);
function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = '';
}
function removeTodo(todo: any) {
  todos.value = todos.value.filter((t) => t !== todo); 
}

</script>

<template>
  <p>step 7: リストレンダリング</p>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>