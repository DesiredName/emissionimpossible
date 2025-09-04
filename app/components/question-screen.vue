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

        <div class="flex flex-col md:flex-row justify-evenly items-center gap-12 my-8">
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

        <ElementsButton
            v-if="areCardsLocked"
            @click="handleNextState"
        >
            Continue
        </ElementsButton>
        <div v-else class="min-h-14">
            <!-- placeholder -->
        </div>
    </div>
</template>

<script setup lang="ts">
const { goto, resetScore, addToScore } = useAppState();

const questionIdx = ref<number>(0);
const questions = useQuestions();
const areCardsLocked = ref<boolean>(false);

const companyA = computed(() => questions[questionIdx.value]!.companyA);
const companyB = computed(() => questions[questionIdx.value]!.companyB);

onMounted(() => {
    resetScore();
})

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
    @apply flex flex-col flex-nowrap justify-start md:justify-center items-center gap-2 md:gap-4 py-10 md:py-0;
    @apply min-w-full min-h-full;
    @apply bg-sig-whiteish;
}
</style>