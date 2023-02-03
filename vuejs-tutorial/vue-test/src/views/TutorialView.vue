<script setup lang="ts">
import { reactive, ref } from 'vue';
import { computed } from 'vue';
import { onMounted } from 'vue';
import { watch } from 'vue';

// step 2
const counter = reactive({ count: 0 }); 
const message = ref('Hello World');

// step 3
const titleClass = ref('title');

// step 4
const count = ref(0);
function increment() {
    count.value++;
}

// step 5
const text = ref('');

// step 6
const awesome = ref(true);
function toggle() {
  awesome.value = !awesome.value;
}

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

// step 9
// この辺参考
// https://stackoverflow.com/questions/65026253/object-is-possibly-null-on-a-refnull?newreg=84e3d8cef2a04b978e686d9891f3bc7b
// https://v3.ja.vuejs.org/guide/composition-api-template-refs.html
const p = ref<Element | null>(null);
onMounted(() => {
  if (p.value !== null) p.value.textContent = 'mounted!';
});

// step 10
const todoId = ref(1);
const todoData = ref(null);
watch(todoId, () => {
  fetchData();
});
const fetchData = async () => {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}
fetchData();

</script>

<template>
  <div class="tutorial">
    <h1>This is a tutorial page</h1>
    <a href="https://ja.vuejs.org/tutorial/">Vue.js tutorial link</a>
    <hr />

    <p>step 2: 宣言的レンダリング</p>
    <h1>{{ message }}</h1>
    <p>Count is: {{ counter.count }}</p>
    <hr />

    <p>step 3: 属性バインディング</p>
    <h1 :class="titleClass">Make me red.</h1>
    <hr />

    <p>step 4: イベントリスナー</p>
    <button @click="increment">count is: {{ count }}</button>
    <hr />

    <p>step 5: フォームバインディング</p>
    <input v-model="text" placeholder="Type here">
    <p>{{ text }}</p>
    <hr />

    <p>step 6: 条件付きレンダリング</p>
    <button @click="toggle">toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no</h1>
    <hr />

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
    <hr />

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
    <hr />

    <p>step 9: ライフサイクルとテンプレート参照</p>
      <p ref="p">hello</p>
    <hr />

    <p>step 10: ウォッチャー</p>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <p v-else>{{ todoData }}</p>
    <hr />

  </div>
</template>

<style>
.title {
    color: red;
}
.done {
  text-decoration: line-through;
}
</style>