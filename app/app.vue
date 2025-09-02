<template>
  <div class="app-container">
    <transition name="fade" mode="out-in" :appear="true">
      <welcome-screen v-if="state == 'welcome'" key="welcome" />
      <final-screen v-else-if="state == 'final'" key="finall" />
      <question-screen v-else key="questions" />
    </transition>
  </div>
</template>

<script setup lang="ts">
const { state } = useAppState();

useHead({
  title: 'GrowRoom - EMISSION:IMPOSSIBLE'
})
</script>

<style scoped>
.app-container {
  @apply w-screen h-screen overflow-visible;
  @apply bg-sig-green;
}
</style>