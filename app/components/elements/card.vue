<template>
    <div class="element-card">
        <div class="text-9xl">{{ company.logo }}</div>
        <div class="text-xl font-bold">{{ company.name }}</div>
        <div class="answer-block">
            <div class="font-extrabold text-xl">{{ company.emissions }}g CO<sub>2</sub></div>
            <div class="text-sig-placeholder text-sm">per page load</div>
            <div class="mt-4">
                <IconsCorrect v-if="company.isSustainable" class="size-8 text-sig-green" />
                <IconsIncorrect v-else class="size-8 text-red-500" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    company: Company
}>()
</script>

<style scoped>
.element-card {
    --card-width: min(20vw, 40rem);

    @apply bg-white shadow-md rounded-xl cursor-pointer;
    @apply flex flex-col gap-3 items-center justify-center;

    @apply transition-all duration-300;
    @apply hover:scale-105;

    width: var(--card-width);
    height: var(--card-width);
}

.element-card .answer-block {
    @apply bg-sig-whiteish rounded-xl text-center pt-4;
    
    width: calc(var(--card-width) * 0.8);
    height: calc(var(--card-width) * 0.3);
}
</style>