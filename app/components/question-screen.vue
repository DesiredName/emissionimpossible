<template>
    <div class="question-screen">
        <ElementsProgressbar
            :value="questionIdx"
            :total="questions.length"
        />

        <div class="text-center font-bold text-xl">
            Question {{ questionIdx + 1 }} of {{ questions.length }}
        </div>

        <div class="text-center text-lg mt-5">
            Which website has <span className="font-bold">higher</span> carbon emissions per page load?
        </div>

        <div class="flex flex-col md:flex-row justify-evenly items-center gap-12 mt-10">
            <ElementsCard :company="questions[questionIdx]!.companyA" />
            <ElementsCard :company="questions[questionIdx]!.companyB" />
        </div>

        <button @click="questionIdx++">+</button>
        <button @click="questionIdx--">-</button>
        <button @click="handleNextState">next</button>
    </div>
</template>

<script setup lang="ts">
const { goto } = useAppState();

const questionIdx = ref<number>(0);
const questions = useQuestions();

const handleNextState = () => goto('score')
</script>

<style scoped>
.question-screen {
    @apply flex flex-col flex-nowrap justify-center items-center gap-4;
    @apply min-w-full min-h-full;
    @apply bg-sig-whiteish;
}
</style>