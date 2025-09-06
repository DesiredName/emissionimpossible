<template>
    <div
        class="question-screen"
        :class="{ 
            'bg-sig-whiteish': state.isResultedBgColorShown !== true,
            'bg-sig-green': (state.isResultedBgColorShown && state.isChosenAnswerWasCorrect), 
            'bg-red-600': (state.isResultedBgColorShown && !state.isChosenAnswerWasCorrect),
        }">
        <div class="main-container" :class="{ 'is-shaking': state.isShaking }">
            <ElementsProgressbar
                :value="state.questionIdx"
                :total="state.questions.length"
            />

            <div class="text-center font-bold text-xl">
                Question {{ state.questionIdx + 1 }} of {{ state.questions.length }}
            </div>

            <div class="text-center text-lg mt-5">
                Which of the following websites are <span className="font-bold">better optimised</span> for energy
                efficiency?
            </div>

            <Transition name="fade">
                <div v-if="state.isResultedEmojiShown && state.isChosenAnswerWasCorrect" className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
                    <div className="text-8xl animate-bounce">🎉</div>
                </div>
                <div v-else-if="state.isResultedEmojiShown && !state.isChosenAnswerWasCorrect" className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
                    <div className="text-8xl animate-pulse">😬</div>
                </div>
            </Transition>

            <ElementsCardsContainer>
                <ElementsCardCompany
                    :company="question.companyA"
                    :is-selected="state.chosenAnswer === 'A'"
                    :is-correct-choise="question.isCorrectChoise == 'A'"
                    :is-showing-answers="state.isInfoBlockShown"
                    @click="handleScore('A')"
                />
                <ElementsCardCompany
                    :company="question.companyB"
                    :is-selected="state.chosenAnswer === 'B'"
                    :is-correct-choise="question.isCorrectChoise == 'B'"
                    :is-showing-answers="state.isInfoBlockShown"
                    @click="handleScore('B')"
                />
            </ElementsCardsContainer>

            <ElementsButton
                v-if="state.isContinueButtonShown"
                @click="handleNextState"
            >
                Continue
            </ElementsButton>
            <div
                v-else
                class="min-h-14"
            >
                <!-- placeholder -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { goto, addToScore } = useAppState();

const state = ref<{
    questions: Question[];
    questionIdx: number;

    chosenAnswer: CardChoise | null;
    isChosenAnswerWasCorrect: boolean;
    isShaking: boolean;
    isInfoBlockShown: boolean;
    isResultedEmojiShown: boolean;
    isResultedBgColorShown: boolean;
    isContinueButtonShown: boolean;
}>({
    questions: useQuestions(),
    questionIdx: 0,    

    chosenAnswer: null,
    isShaking: false,
    isChosenAnswerWasCorrect: false,
    isInfoBlockShown: false,
    isResultedEmojiShown: false,
    isResultedBgColorShown: false,
    isContinueButtonShown: false,
});

const question = computed(() => state.value.questions[state.value.questionIdx]!);

// 
const _shakeScreen = async () => {
    state.value.isShaking = true;

    await waitFor(2000);

    state.value.isShaking = false;
}

const _changeColorAndShowFace = async (_isCorrectAnswer: boolean) => {
    state.value.isInfoBlockShown = true;
    state.value.isResultedEmojiShown = true;
    state.value.isResultedBgColorShown = true;
    
    await waitFor(2500);

    state.value.isResultedEmojiShown = false;
}
// 

const handleScore = async (selection: CardChoise) => {
    if (state.value.chosenAnswer != null) {
        return;
    }
       
    state.value.chosenAnswer = selection;
    state.value.isChosenAnswerWasCorrect = selection == question.value.isCorrectChoise;

    if (state.value.isChosenAnswerWasCorrect) {
        addToScore();
    }

    await _shakeScreen();
    
    state.value.isContinueButtonShown = true;

    await _changeColorAndShowFace(state.value.isChosenAnswerWasCorrect);
}

const handleNextState = () => {
    if (state.value.questionIdx + 1 >= state.value.questions.length) {
        goto('score')
    } else {
        state.value.questionIdx++;
    }

    state.value.chosenAnswer = null;
    state.value.isShaking = false;
    state.value.isInfoBlockShown = false;
    state.value.isChosenAnswerWasCorrect = false;
    state.value.isContinueButtonShown = false;
    state.value.isResultedBgColorShown = false;
    state.value.isResultedEmojiShown = false;
}
</script>

<style scoped>
.question-screen {
    @apply flex flex-col flex-nowrap justify-start md:justify-center items-center py-10 md:py-0;
    @apply min-w-full min-h-full;
    @apply transition-colors duration-300;
}

.question-screen .main-container {
    @apply flex flex-col flex-nowrap justify-center items-center gap-2;
    @apply min-w-full min-h-full;
}

.question-screen .main-container.is-shaking {
    animation-name: animate-shaking;
    animation-duration: 200ms;
    animation-iteration-count: infinite;
}
</style>