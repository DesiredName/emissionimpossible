<template>
    <div
        class="question-screen"
        :class="{ 
            'bg-sig-whiteish': isResultedBgColorShown !== true,
            'bg-sig-green': (isResultedBgColorShown && isChosenAnswerWasCorrect), 
            'bg-red-600': (isResultedBgColorShown && !isChosenAnswerWasCorrect),
        }">
        <div class="main-container" :class="{ 'is-shaking': isShaking }">
            <ElementsProgressbar
                :value="questionIdx"
                :total="questions.length"
            />

            <div class="text-center font-bold text-xl">
                Question {{ questionIdx + 1 }} of {{ questions.length }}
            </div>

            <div class="text-center text-lg mt-5">
                Which of the following websites are <span className="font-bold">better optimised</span> for energy
                efficiency?
            </div>

            <Transition name="fade">
                <div v-if="isResultedEmojiShown && isChosenAnswerWasCorrect" className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
                    <div className="text-8xl animate-bounce">🎉</div>
                </div>
                <div v-else-if="isResultedEmojiShown && !isChosenAnswerWasCorrect" className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
                    <div className="text-8xl animate-pulse">😬</div>
                </div>
            </Transition>

            <ElementsCardsContainer>
                <ElementsCardCompany
                    :company="question.companyA"
                    :is-selected="chosenAnswer === 'A'"
                    :is-correct-choise="question.isCorrectChoise == 'A'"
                    :is-showing-answers="areInfoBlocksShown"
                    @click="handleScore('A')"
                />
                <ElementsCardCompany
                    :company="question.companyB"
                    :is-selected="chosenAnswer === 'B'"
                    :is-correct-choise="question.isCorrectChoise == 'B'"
                    :is-showing-answers="areInfoBlocksShown"
                    @click="handleScore('B')"
                />
            </ElementsCardsContainer>

            <ElementsButton
                v-if="isContinueButtonShown"
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

const questionIdx = ref<number>(0);
const questions = useQuestions();

const chosenAnswer = ref<CardChoise | null>(null);
const isShaking = ref<boolean>(false);
const isChosenAnswerWasCorrect = ref<boolean>(false);
const areInfoBlocksShown = ref<boolean>(false);
const isResultedEmojiShown = ref<boolean>(false);
const isResultedBgColorShown = ref<boolean>(false);
const isContinueButtonShown = ref<boolean>(false);

const question = computed(() => questions[questionIdx.value]!);

// 
const WaitFor = (v: number) => new Promise((res) => setTimeout(res, v));

const shakeScreen = async () => {
    isShaking.value = true;

    await WaitFor(2000);

    isShaking.value = false;
}

const changeColorAndShowFace = async (_isCorrectAnswer: boolean) => {
    areInfoBlocksShown.value = true;
    isResultedEmojiShown.value = true;
    isResultedBgColorShown.value = true;
    
    await WaitFor(2500);

    isResultedEmojiShown.value = false;
}
// 

const handleScore = async (selection: CardChoise) => {
    if (chosenAnswer.value != null) {
        return;
    } else {
        chosenAnswer.value = selection;
    }

    isChosenAnswerWasCorrect.value = selection == question.value.isCorrectChoise;

    if (isChosenAnswerWasCorrect.value) {
        addToScore();
    }

    await shakeScreen();
    
    isContinueButtonShown.value = true;

    await changeColorAndShowFace(isChosenAnswerWasCorrect.value);
}

const handleNextState = () => {
    if (questionIdx.value + 1 >= questions.length) {
        goto('score')
    }

    questionIdx.value++;

    chosenAnswer.value = null;
    isShaking.value = false;
    areInfoBlocksShown.value = false;
    isChosenAnswerWasCorrect.value = false;
    isContinueButtonShown.value = false;
    isResultedBgColorShown.value = false;
    isResultedEmojiShown.value = false;
}
</script>

<style scoped>
.question-screen {
    @apply flex flex-col flex-nowrap justify-center items-center gap-2 py-10 md:py-0;
    @apply min-w-full min-h-full;
    @apply transition-colors duration-300;
}

.question-screen .main-container {
    @apply flex flex-col flex-nowrap justify-center items-center gap-2 py-10 md:py-0;
    @apply min-w-full min-h-full;
}

.question-screen .main-container.is-shaking {
    animation-name: animate-shaking;
    animation-duration: 200ms;
    animation-iteration-count: infinite;
}
</style>