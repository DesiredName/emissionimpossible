<template>
    <div class="finall-screen">
        <div class="text-4xl font-bold">
            How does your website compare?
        </div>

        <ElementsCardsContainer>
            <ElementsCardContainer>
                1
            </ElementsCardContainer>
            <ElementsCardContainer>
                2
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

const handleGoHome = () => goto('welcome');
</script>

<style scoped>
.finall-screen {
    @apply flex flex-col flex-nowrap justify-center items-center gap-2;
    @apply min-w-full min-h-full;
    @apply bg-sig-whiteish;
}
</style>