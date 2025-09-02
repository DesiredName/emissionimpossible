<template>
    <div class="welcome-screen-container">
        <div class="form-container">
            <div class="form">
                <div class="form-title-container">
                    <img src="/assets/logo.png" class="logo-icon">
                    <span class="logo-title">GrowRoom</span>
                </div>
                <div class="logo-slogan">
                    EMISSION:IMPOSSIBLE
                </div>
                <div class="form-controls-container">
                    <div class="control-container">
                        <label for="username">Name</label>
                        <input id="username" type="text" placeholder="Enter your name">
                    </div>
                    <div class="control-container">
                        <label for="email">Email</label>
                        <input id="email" type="email" placeholder="Enter your email">
                    </div>
                    <div class="control-container">
                        <button type="button">
                            Start Game
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.welcome-screen-container {
    @apply flex flex-col;
    @apply min-w-full min-h-full;
    @apply bg-left-top bg-cover bg-no-repeat;
    @apply bg-[url(/assets/bg-mobile.png)] md:bg-[url(/assets/bg-tablet.png)] xl:bg-[url(/assets/bg-desktop.png)];
}

.welcome-screen-container .form-container {
    @apply flex flex-col flex-nowrap;
}

/* form */

.welcome-screen-container .form {
    @apply flex flex-col flex-nowrap items-start justify-stretch;
    @apply min-w-0 w-full;
}

.welcome-screen-container .form .form-title-container {
    @apply flex flex-row items-center justify-between;
}

.welcome-screen-container .form .form-title-container .logo-title {
    @apply flex-1 text-white font-bold;
}

.welcome-screen-container .form .logo-slogan {
    @apply text-white uppercase font-agdasima;
}

.welcome-screen-container .form .form-controls-container {
    @apply w-full min-w-0;
    @apply flex flex-col;
}

.welcome-screen-container .form .control-container {
    @apply flex flex-col justify-start items-stretch;
}

.welcome-screen-container .form .control-container > label {
    @apply text-white;
}

.welcome-screen-container .form .control-container > input {
    @apply bg-white;
    @apply border-none outline-none;
}

.welcome-screen-container .form .control-container > input::placeholder {
    @apply text-sig-placeholder;
}

.welcome-screen-container .form .control-container > button {
    @apply font-bold bg-sig-accent;
    @apply border-none outline-none;
}

/* sizing */

.welcome-screen-container {
    @apply items-center justify-end;
    @apply xl:items-end xl:justify-center;
}

.welcome-screen-container .form-container {
    @apply pb-5;
    @apply xl:pb-10 xl:pr-32;
    @apply items-center justify-start;
    @apply w-full min-h-[50vh];
    @apply xl:w-auto xl:items-end;
}

.welcome-screen-container .form {
    @apply gap-4 overflow-hidden;
    @apply w-80 md:w-[28rem];
}

.welcome-screen-container .form .form-title-container {
    @apply gap-3;
    @apply md:gap-4;
}

.welcome-screen-container .form .form-title-container .logo-icon {
    @apply h-8 w-12;
    @apply md:h-12 md:w-28;
}

.welcome-screen-container .form .form-title-container .logo-title {
    @apply text-[2.75rem] leading-9;
    @apply md:text-[3.8rem] md:leading-[3rem];
}

.welcome-screen-container .form .logo-slogan {
    @apply text-[2.93rem] leading-10;
    @apply md:text-[4.05rem] md:leading-[4rem];
}

.welcome-screen-container .form .form-controls-container {
    @apply gap-2 mt-3;
    @apply md:gap-5 md:mt-5;
}

.welcome-screen-container .form .control-container {
    @apply gap-2;
    @apply md:gap-1;
}

.welcome-screen-container .form .control-container > label {
    @apply text-sm;
    @apply md:text-lg;
}

.welcome-screen-container .form .control-container > input {
    @apply rounded-[0.25rem];
    @apply md:rounded-lg;
}

.welcome-screen-container .form .control-container > button {
    @apply mt-3 rounded-xl;
    @apply md:mt-1 md:rounded-lg;
    @apply tracking-wider;
}

.welcome-screen-container .form .control-container > button,
.welcome-screen-container .form .control-container > input {
    @apply text-sm;
    @apply md:text-lg;
    @apply px-2 py-3 min-w-full;
    @apply md:px-3 md:py-4;
}
</style>
