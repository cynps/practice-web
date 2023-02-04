<script setup lang="ts">
import { ref } from 'vue';

// step 6
const awesome = ref(true);
function toggle() {
  awesome.value = !awesome.value;
}

</script>

<template>
  <p>step 6: 条件付きレンダリング</p>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no</h1>
</template>