<script setup lang="ts">
import { ref, computed } from 'vue';

// step 8
let id8 = 0;
const newTodo8 = ref('');
const hideCompleted = ref(false);
const todos8 = ref([
  { id: id8++, text: 'Learn HTML', done: true },
  { id: id8++, text: 'Learn JavaScript', done: true },
  { id: id8++, text: 'Learn Vue', done: false }
]);
const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos8.value.filter((t) => !t.done)
    : todos8.value
});
function addTodo8() {
  todos8.value.push({ id: id8++, text: newTodo8.value, done: false });
  newTodo8.value = '';
}
function removeTodo8(todo: any) {
  todos8.value = todos8.value.filter((t) => t !== todo);
}
</script>

<template>
  <p>step 8: 算出プロパティー</p>
  <form @submit.prevent="addTodo8">
    <input v-model="newTodo8">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo8(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>