<script setup lang="ts">
import { ref } from 'vue';

// step 5
const text = ref('');

</script>

<template>
  <p>step 5: フォームバインディング</p>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>