<script setup>
import SpeakerCard from "~/components/shared/SpeakerCard.vue";
import AppContainer from "~/components/ui/AppContainer.vue";

useHead({
  title: "2025 Advisory Board | Revive ME",
  meta: [
    {
      name: "description",
      content:
        "Meet our esteemed Advisory Board members, who will help us curate a high-level agenda and shape world-class content for Revive ME 2025.",
    },
  ],
});

const {
  data: advisoryBoard,
  pending,
  error,
} = await useFetch(
  `https://revorocrmsgr-ceeuddeqfdevbfas.centralindia-01.azurewebsites.net/OnBoardings/GetByOnBoardingType/Revive ME/2025/Speaker/Advisory Board`,
);
</script>

<template>
  <section>
    <AppContainer class="py-10 md:py-20">
      <h3 class="text-sm text-[var(--primary)]">Our Visionaries</h3>
      <h1 class="text-4xl font-bold uppercase mb-10">Advisory Board</h1>

      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Something went wrong</div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <SpeakerCard
          v-for="(item, index) in advisoryBoard"
          :key="index"
          :item="item"
          linkBase="/conference/advisory-board"
        />
      </div>
    </AppContainer>
  </section>
</template>
