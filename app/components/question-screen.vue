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

        <div class="flex flex-col md:flex-row justify-evenly items-center gap-12 mt-10 mb-8">
            {{ getScore }}
            <ElementsCard
                :company="companyA"
                :is-locked="areCardsLocked"
                @click="handleScore('A')"
            />
            <ElementsCard
                :company="companyB"
                :is-locked="areCardsLocked"
                @click="handleScore('B')"
            />
        </div>

        <button
            v-if="areCardsLocked"
            class="next-button"
            @click="handleNextState"
        >
            Continue
        </button>
    </div>
</template>

<script setup lang="ts">
const { goto, addToScore, getScore } = useAppState();

const questionIdx = ref<number>(0);
const questions = useQuestions();
const areCardsLocked = ref<boolean>(false);

const companyA = computed(() => questions[questionIdx.value]!.companyA);
const companyB = computed(() => questions[questionIdx.value]!.companyB);

const handleScore = (selection: 'A' | 'B') => {
    if (areCardsLocked.value === true) {
        return;
    }

    const isCorrect =
        (selection === 'A' && companyA.value.emissions > companyB.value.emissions) ||
        (selection === 'B' && companyB.value.emissions > companyA.value.emissions);

    if (isCorrect) addToScore();

    areCardsLocked.value = true;
}

const handleNextState = () => {
    if (questionIdx.value + 1 >= questions.length) {
        goto('score')
    }
    
    questionIdx.value++;
    areCardsLocked.value = false;
}
</script>

<style scoped>
.question-screen {
    @apply flex flex-col flex-nowrap justify-start items-center gap-4 pt-12;
    @apply min-w-full min-h-full;
    @apply bg-sig-whiteish;
}

.question-screen .next-button {
    @apply text-sig-green font-bold text-lg;
    @apply py-3 px-12 bg-sig-accent rounded-lg;
    @apply transition-transform duration-300 hover:scale-105;
}
</style>