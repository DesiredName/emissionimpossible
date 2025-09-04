<template>
    <div class="score-screen">
        {{ results.emoji }}
        <button @click="handleNextState">next</button>
    </div>
</template>

<script setup lang="ts">
const { goto, getScore } = useAppState();
const handleNextState = () => goto('final');

const results = computed<{ emoji: string; message: string }>(() => {
    const score = getScore.value;

    if (score <= 1) return { emoji: "💩😬", message: "Oops! Time to brush up on carbon literacy!" };
    if (score <= 2) return { emoji: "😅", message: "Not bad, but there's room to grow!" };
    if (score <= 3) return { emoji: "👍", message: "Good work! You're getting the hang of it!" };
    if (score <= 4) return { emoji: "😲💪", message: "Impressive! You really know your carbon footprints!" };

    return { emoji: "🏆🌱", message: "Outstanding! You're a carbon emissions expert!" };
});
</script>

<style scoped>
.score-screen {
    @apply flex flex-col flex-nowrap justify-center items-center gap-4 pt-8;
    @apply min-w-full min-h-full;
    @apply bg-sig-whiteish;
}
</style>