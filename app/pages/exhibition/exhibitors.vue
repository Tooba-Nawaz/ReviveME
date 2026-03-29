<script setup>
import RegisterCTA from "~/components/shared/RegisterCTA.vue";
import AppContainer from "~/components/ui/AppContainer.vue";
import ParticipantCard from "~/components/shared/ParticipantCard.vue";

useHead({
  title: "2025 Exhibitors | Revive ME",
  meta: [
    {
      name: "description",
      content:
        "Discover a comprehensive list of exhibitors showcasing their latest innovations and technologies at the UAE’s Premier longevity Summit.",
    },
  ],
});

const {
  data: apiExhibitors,
  pending: loading,
  error,
  refresh,
} = await useFetch(
  `https://revorocrmsgr-ceeuddeqfdevbfas.centralindia-01.azurewebsites.net/OnBoardings/GetByOnBoardingType/Revive ME/2025/Exhibitor`,
  {
    key: "exhibitors",
    lazy: true,
  },
);

const exhibitors = computed(() =>
  (apiExhibitors.value || []).map((item) => ({
    name: item.name || "Unnamed",
    description: item.description || "",
    logo: item.logo || null,
    level: item.onboardingSubType?.toLowerCase() || "exhibitor",
    href: item.website || "#",
  })),
);
</script>

<template>
  <AppContainer class="py-10 md:py-20">
    <section class="mb-16">
      <h1 class="text-4xl font-bold uppercase">EXHIBITORS</h1>
      <p class="text-sm">2025</p>

      <div v-if="loading" class="text-center py-10">
        <p class="text-lg">Loading exhibitors, please wait...</p>
      </div>

      <div v-else-if="error" class="text-center py-10">
        <p class="text-red-500 mb-4">Failed to load exhibitors.</p>
        <button
          @click="refresh()"
          class="px-4 py-2 bg-black text-white rounded"
        >
          Retry
        </button>
      </div>

      <div v-else-if="exhibitors.length === 0" class="text-center py-10">
        No exhibitors available at the moment.
      </div>

      <div v-else class="sponsorListing__cards">
        <ParticipantCard
          v-for="item in exhibitors"
          :key="item.name"
          v-bind="item"
          type="exhibitor"
        />
      </div>
    </section>

    <RegisterCTA
      :title="`Become An Exhibitor`"
      :description="`Join an elite circle of industry leaders and showcase your brand to over 5,000 top-tier professionals and innovators.`"
      :cta="`Request Exhibitor Prospectus`"
    />
  </AppContainer>
</template>
