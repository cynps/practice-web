<script setup lang="ts">
import { ref } from 'vue';

// step 4
const count = ref(0);
function increment() {
  count.value++;
}

</script>

<template>
  <p>step 4: イベントリスナー</p>
  <button @click="increment">count is: {{ count }}</button>
</template>