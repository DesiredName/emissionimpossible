type AppState = 'welcome' | 'questionnaire' | 'score' | 'final';

const state = ref<AppState>('welcome');

export default function () {
    return {
        state,

        goto: (next: AppState) => state.value = next,
    }
}