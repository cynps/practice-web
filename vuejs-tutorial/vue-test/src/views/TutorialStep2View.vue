<script setup lang="ts">
import { reactive, ref } from 'vue';

// step 2
const counter = reactive({ count: 0 }); 
const message = ref('Hello World');

</script>

<template>
  <p>step 2: 宣言的レンダリング</p>
  <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p>
</template>