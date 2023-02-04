<script setup lang="ts">
import { ref, onMounted } from 'vue';

// step 9
// この辺参考
// https://stackoverflow.com/questions/65026253/object-is-possibly-null-on-a-refnull?newreg=84e3d8cef2a04b978e686d9891f3bc7b
// https://v3.ja.vuejs.org/guide/composition-api-template-refs.html
const p = ref<Element | null>(null);
onMounted(() => {
  if (p.value !== null) p.value.textContent = 'mounted!';
});

</script>

<template>
  <p>step 9: ライフサイクルとテンプレート参照</p>
  <p ref="p">hello</p>
</template>