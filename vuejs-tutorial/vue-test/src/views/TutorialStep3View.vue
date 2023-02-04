<script setup lang="ts">
import { ref } from 'vue';

// step 3
const titleClass = ref('title');

</script>

<template>
  <p>step 3: 属性バインディング</p>
  <h1 :class="titleClass">Make me red.</h1>
</template>