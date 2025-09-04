<template>
    <div tabindex="0" role="button" class="element-card-base element-card-company" :class="{'is-locked': isLocked}">
        <div class="text-9xl">{{ company.logo }}</div>
        <div class="text-xl font-bold">{{ company.name }}</div>
        <Transition name="fade" mode="out-in">
            <div v-if="isLocked" class="answer-block">
                <div class="font-extrabold text-xl">{{ company.emissions }}g CO<sub>2</sub></div>
                <div class="text-sig-placeholder text-sm">per page load</div>
                <div class="mt-4">
                    <IconsCorrect v-if="company.isSustainable" class="size-8 text-sig-green" />
                    <IconsIncorrect v-else class="size-8 text-red-500" />
                </div>
            </div>
            <div v-else class="answer-block-placeholder">
                <!-- placehodler -->
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    company: Company,
    isLocked: boolean,
}>()
</script>

<style scoped>
.element-card-company.is-locked {
    @apply cursor-not-allowed;
}

.element-card-company .answer-block {
    @apply bg-sig-whiteish rounded-xl text-center pt-4;
}

.element-card-company .answer-block,
.element-card-company .answer-block-placeholder {
    width: calc(var(--card-width) * 0.8);
    height: calc(var(--card-width) * 0.3);
}
</style>