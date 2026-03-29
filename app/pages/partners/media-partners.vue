<script setup>
import RegisterCTA from "~/components/shared/RegisterCTA.vue";
import AppContainer from "~/components/ui/AppContainer.vue";
import ParticipantCard from "~/components/shared/ParticipantCard.vue";

const {
  public: { blobBaseUrl },
} = useRuntimeConfig();

useHead({
  title: "2025 Media Partners | Revive ME",
  meta: [
    {
      name: "description",
      content:
        "Discover the leading organisations partnering with the region’s top health tech innovation summit. Explore opportunities for collaboration.",
    },
  ],
});

const {
  data: apiMediaPartners,
  pending: loading,
  error,
  refresh,
} = await useFetch(
  `https://revorocrmsgr-ceeuddeqfdevbfas.centralindia-01.azurewebsites.net/OnBoardings/GetByOnBoardingType/Revive ME/2025/Partner`,
  {
    key: "media-partners",
    lazy: true,
  },
);

const allowedTypes = ["media partner", "strategic media partner"];

const mediaPartners = computed(() =>
  (apiMediaPartners.value || [])
    .filter((p) => allowedTypes.includes(p.onboardingSubType?.toLowerCase()))
    .map((item) => ({
      name: item.name || "Unnamed",
      description: item.description || "",
      logo: item.logo || null,
      level: item.onboardingSubType || "Media Partner",
      href: item.website || "#",
    })),
);
</script>

<template>
  <AppContainer class="py-10 md:py-20">
    <section class="mb-16">
      <h1 class="text-4xl font-bold uppercase">MEDIA PARTNERS</h1>
      <p class="text-sm">2025</p>

      <div v-if="loading" class="text-center py-10">
        <p class="text-lg">Loading media partners, please wait...</p>
      </div>

      <div v-else-if="error" class="text-center py-10">
        <p class="text-red-500 mb-4">Failed to load media partners.</p>
        <button
          @click="refresh()"
          class="px-4 py-2 bg-black text-white rounded"
        >
          Retry
        </button>
      </div>

      <div v-else-if="mediaPartners.length === 0" class="text-center py-10">
        No media partners available at the moment.
      </div>

      <div v-else class="sponsorListing__cards">
        <ParticipantCard
          v-for="item in mediaPartners"
          :key="item.name"
          v-bind="item"
          type="mediasponsor"
        />
      </div>
    </section>

    <RegisterCTA
      :title="`Become A Media Partner`"
      :description="`Join an elite circle of industry leaders and showcase your brand to over 5,000 top-tier professionals and innovators.`"
      :cta="`Request Partnership Prospectus`"
    />
  </AppContainer>
</template>
