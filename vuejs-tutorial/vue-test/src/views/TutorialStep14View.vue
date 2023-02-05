<script setup lang="ts">
import { ref } from 'vue';
import ChildComp from '../components/ChildCompStep14.vue';

const msg = ref('from parent');
</script>

<template>
  <p>step 14: Slots</p>
  <ChildComp>Message: {{ msg }}</ChildComp>
</template>