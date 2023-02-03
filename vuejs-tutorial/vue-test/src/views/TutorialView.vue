<script setup lang="ts">
import { reactive, ref } from 'vue';

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

    <p>step x</p>
    <hr />

  </div>
</template>

<style>
.title {
    color: red;
}
</style>