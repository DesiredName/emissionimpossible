<template>
    <div class="welcome-screen-container">
        <div class="form-container">
            <form
                class="form"
                @submit.prevent="handleGoToQuestion"
            >
                <div class="form-title-container">
                    <div class="company-logo">
                        <img
                            class="logo-icon"
                            alt="GrowRoom company logo"
                            src="/assets/logo.png"
                        >
                        <span class="logo-title">GrowRoom</span>
                    </div>
                    <div class="company-slogan">
                        EMISSION:IMPOSSIBLE
                    </div>
                </div>
                <div class="form-controls-container">
                    <div class="control-container">
                        <label for="username">Name</label>
                        <input
                            id="username"
                            v-model="username"
                            type="text"
                            placeholder="Enter your name"
                            size="1"
                            autocomplete="username"
                            autofocus
                            :class="{ 'is-invalid': isUsernameError }"
                            @focus="handleResetError"
                        >
                    </div>
                    <div class="control-container">
                        <label for="email">Email</label>
                        <input
                            id="email"
                            v-model="email"
                            type="email"
                            placeholder="Enter your email"
                            size="1"
                            autocomplete="email"
                            :class="{ 'is-invalid': isEmailError }"
                            @focus="handleResetError"
                        >
                    </div>
                    <div class="control-container">
                        <button type="submit">
                            Start Game
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const { goto } = useAppState();

const email = ref<string>('');
const username = ref<string>('');

const resetErrorStateTimer = ref<number | undefined>(undefined);
const isEmailError = ref<boolean>(true);
const isUsernameError = ref<boolean>(true);

const handleResetError = () => {
    window.clearTimeout(resetErrorStateTimer.value);

    resetErrorStateTimer.value = undefined;
    isEmailError.value = false;
    isUsernameError.value = false;
}

const handleGoToQuestion = async () => {
    window.clearTimeout(resetErrorStateTimer.value);

    isEmailError.value = /^.*@.*\..{2,}$/i.test(email.value) !== true;
    isUsernameError.value = username.value.trim().length <= 0;

    if (isEmailError.value || isUsernameError.value) {
        resetErrorStateTimer.value = window.setTimeout(() => {
            handleResetError()
        }, 4000);

        return
    } else {
        goto('questionnaire');
    }
}

onMounted(() => {
    isEmailError.value = false;
    isUsernameError.value = false;
});
</script>

<style scoped>
.welcome-screen-container {
    @apply flex flex-col;
    @apply min-w-full min-h-full;
    @apply bg-left-top bg-cover bg-no-repeat;
    @apply bg-[url(/assets/bg-mobile.png)] md:bg-[url(/assets/bg-tablet.png)] xl:bg-[url(/assets/bg-desktop.png)];
}

/* form */
.welcome-screen-container .form-container .form {
    @apply min-w-min w-fit;
}

.form .form-title-container {
    @apply flex flex-col flex-nowrap min-w-0;
}

.form .form-title-container .company-logo {
    @apply flex flex-row flex-nowrap justify-evenly items-center;
}

.form .form-title-container .company-logo .logo-icon {
    @apply shrink-0 grow-0;
}

.form .form-title-container .company-logo .logo-title {
    @apply flex-1 text-end font-bold;
}

.form .form-title-container .company-slogan {
    @apply font-agdasima font-bold;
}

/* controls */
.form input,
.form button {
    @apply min-w-0 overflow-hidden;
}

.form .form-controls-container {
    @apply flex flex-col flex-nowrap justify-start items-stretch;
}

.form .form-controls-container .control-container {
    @apply flex flex-col justify-start items-stretch;
}

/* colors */
.form {
    @apply text-white;
}

.form input {
    @apply border-none outline-none;
}

.form input.is-invalid {
    @apply animate-[bounce-3times_1s_3];
}

.form input {
    @apply text-sig-grey;
}

.form input::placeholder {
    @apply text-sig-placeholder;
}

.form button {
    @apply bg-sig-accent text-sig-grey;
}

/* placing form */

.welcome-screen-container {
    @apply items-center justify-end pb-20;
    @apply md:pb-32;
    @apply xl:items-end xl:pb-32 xl:pr-32;
}

/* sizing - company-slogan is base width */

.form .form-title-container {
    @apply gap-1;
    @apply md:gap-2;
    @apply xl:gap-3;
}

.form .form-title-container .company-logo .logo-icon {
    @apply h-8 w-12;
    @apply md:h-9 md:w-13;
    @apply xl:h-14 xl:w-20;
}

.form .form-title-container .company-logo .logo-title {
    @apply text-4xl;
    @apply md:text-5xl;
    @apply xl:text-7xl xl:font-bold;
}

.form .form-title-container .company-slogan {
    @apply text-4xl tracking-wide;
    @apply md:text-5xl md:tracking-normal;
    @apply xl:text-7xl;
}

.form label {
    @apply text-xs;
    @apply md:text-sm;
    @apply xl:text-lg;
}

.form input,
.form button {
    @apply px-2 py-2.5 text-xs rounded-md;
}

.form input {
    @apply md:text-base;
    @apply xl:text-lg xl:py-4 xl:px-3;
}

.form button {
    @apply md:py-3.5 md:font-bold md:tracking-wider;
    @apply xl:text-lg xl:py-4 xl:tracking-normal;
}

.form .form-controls-container {
    @apply gap-2 mt-3;
    @apply md:mt-5;
    @apply xl:gap-3;
}

.form .form-controls-container .control-container {
    @apply gap-1;
    @apply xl:gap-0.5;
}

.form .form-controls-container .control-container:has(button) {
    @apply mt-2;
    @apply xl:mt-4;
}
</style>
