<template>
    <div>
        question
        <button @click="handleNextState">next</button>
    </div>
</template>

<script setup lang="ts">
const { goto } = useAppState();
const handleNextState = () => goto('final')
</script>