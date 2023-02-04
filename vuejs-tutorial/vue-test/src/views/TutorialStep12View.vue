<script setup lang="ts">
import ChildComp from '../components/ChildCompStep12.vue';

const greeting = "Hello from parent (step 12)"
</script>

<template>
  <ChildComp :msg="greeting"/>
</template>