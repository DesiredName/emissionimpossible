type AppState = 'welcome' | 'questionnaire' | 'score' | 'final';

const state = ref<AppState>('welcome');
const score = ref<number>(0);

export default function () {
    return {
        state,

        goto: (next: AppState) => state.value = next,
        
        getScore: computed(() => score.value),
        resetScore: () => score.value = 0,
        addToScore: () => score.value = score.value + 1,
    }
}