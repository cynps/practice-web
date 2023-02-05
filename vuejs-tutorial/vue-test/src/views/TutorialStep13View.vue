<script setup lang="ts">
import { ref } from 'vue';
import ChildComp from '../components/ChildCompStep13.vue';
const childMsg = ref('No child msg yet');
</script>

<template>
  <p>step 13: Emits</p>
  <ChildComp @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>