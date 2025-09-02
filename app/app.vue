<template>
  <div class="bg-sig-yellow">
    hi {{ result }}
  </div>
</template>

<script setup lang="ts">
const result = ref<string>('waiting...')

onMounted(async () => {
  result.value = await $fetch<string>('/api/test');
})
</script>