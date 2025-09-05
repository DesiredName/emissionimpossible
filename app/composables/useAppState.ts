type AppState = 'welcome' | 'questionnaire' | 'score' | 'final';

const state = ref<AppState>('welcome');
const score = ref<number>(0);
const userdata = ref<{ username: string, email: string }>({ username: '', email: '' });

export default function () {
    return {
        state,

        goto: (next: AppState) => state.value = next,

        getScore: computed(() => score.value),

        reset: () => {
            score.value = 0;
            userdata.value.email = '';
            userdata.value.username = '';
        },

        setUserData: (data: { username: string, email: string }) => userdata.value = data,
        addToScore: () => score.value = score.value + 1,
    }
}