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
            Which of the following websites are <span className="font-bold">better optimised</span> for energy efficiency?
        </div>

        <ElementsCardsContainer>
            <ElementsCardCompany
                :company="question.companyA"
                :is-correct-choise="question.isCorrectChoise == 'A'"
                :is-locked="areCardsLocked"
                @click="handleScore('A')"
            />
            <ElementsCardCompany
                :company="question.companyB"
                :is-correct-choise="question.isCorrectChoise == 'B'"
                :is-locked="areCardsLocked"
                @click="handleScore('B')"
            />
        </ElementsCardsContainer>

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
const { goto, addToScore } = useAppState();

const questionIdx = ref<number>(0);
const questions = useQuestions();
const areCardsLocked = ref<boolean>(false);

const question = computed(() => questions[questionIdx.value]!);

const handleScore = (selection: 'A' | 'B') => {
    if (areCardsLocked.value === true) {
        return;
    }

    if (selection == question.value.isCorrectChoise) {
        addToScore();
    }

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
    @apply flex flex-col flex-nowrap justify-center items-center gap-2 py-10 md:py-0;
    @apply min-w-full min-h-full;
    @apply bg-sig-whiteish;
}
</style>