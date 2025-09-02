type AppState = 'welcome' | 'q1' | 'score' | 'final';

const state = ref<AppState>('welcome');

export default function () {
    return {
        state,

        goto: (next: AppState) => state.value = next,
    }
}