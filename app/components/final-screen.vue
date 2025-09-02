<template>
    <div>
        finall screen
        <button @click="handleGoHome">next</button>
    </div>
</template>

<script setup lang="ts">
const { goto } = useAppState();

const handleGoHome = () => goto('welcome');
</script>