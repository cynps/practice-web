<script setup lang="ts">
const props = defineProps({
  msg: String
});
</script>

<template>
  <p>step 12: Props</p>
  <h2>{{ msg || 'No props passed yet' }}</h2>
</template>