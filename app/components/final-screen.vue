<template>
    <div class="finall-screen">
        <div class="text-2xl md:text-4xl font-bold text-center">
            How does your website compare?
        </div>

        <ElementsCardsContainer>
            <ElementsCardContainer>
                <div>
                    <img class="size-32" :src="`/assets/companies/${growRoom.logo}`" :alt="growRoom.web" >
                </div>
                <div class="font-extrabold text-2xl text-black">
                    {{ growRoom.name }}
                </div>
                <ElementsAnswerBlock 
                    class="bg-green-100 text-green-800"
                    :company="growRoom"
                    :is-visible="true"
                    :is-correct-choise="undefined"
                />
            </ElementsCardContainer>
            <ElementsCardContainer class="border-2 border-dashed border-sig-placeholder">
                <div class="text-8xl py-4">🌐</div>
                <div class="font-extrabold text-2xl text-sig-gray">
                    Your Website
                </div>
                <div class="info-custom-block bg-sig-whiteish text-sig-gray">
                    <div class="font-bold text-2xl">?</div>
                    <div class="text-lg">Let's find out!</div>
                </div>
            </ElementsCardContainer>

            <template #footer>
                <div class="bg-sig-green text-white p-8 rounded-xl text-center">
                    <div class="text-lg">
                        Reduce your website's environmental footprint whilst growing your business with GrowRoom - Where good brands bloom.
                    </div>
                </div>
            </template>
        </ElementsCardsContainer>


        <ElementsButton class="mt-10" @click="handleGoHome">Restart</ElementsButton>
    </div>
</template>

<script setup lang="ts">
const { goto } = useAppState();
const { growRoom } = useAppConfig();

const handleGoHome = () => goto('welcome');
</script>

<style scoped>
.finall-screen {
    @apply flex flex-col flex-nowrap justify-center items-center gap-2 py-10 md:py-0;
    @apply min-w-full min-h-full;
    @apply bg-sig-whiteish;
}

.finall-screen .info-custom-block {
    @apply flex flex-col flex-nowrap justify-center items-center gap-1;
    @apply rounded-xl w-4/5 overflow-hidden;
    @apply h-max py-4 mb-6;
}
</style>
