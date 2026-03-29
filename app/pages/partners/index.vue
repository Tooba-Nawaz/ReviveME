<script setup>
import RegisterCTA from "~/components/shared/RegisterCTA.vue";
import AppContainer from "~/components/ui/AppContainer.vue";
import ParticipantCard from "~/components/shared/ParticipantCard.vue";

const {
  public: { blobBaseUrl },
} = useRuntimeConfig();

useHead({
  title: "2025 Partners | Revive ME",
  meta: [
    {
      name: "description",
      content:
        "Discover the leading organisations partnering with the region’s top health tech innovation summit. Explore opportunities for collaboration.",
    },
  ],
});

const {
  data: apiPartners,
  pending: loading,
  error,
  refresh,
} = await useFetch(
  `https://revorocrmsgr-ceeuddeqfdevbfas.centralindia-01.azurewebsites.net/OnBoardings/GetByOnBoardingType/Revive ME/2025/Partner`,
  {
    key: "partners",
    lazy: true,
  },
);

const partners = computed(() =>
  (apiPartners.value || [])
    .filter((p) => {
      const type = p.onboardingSubType?.toLowerCase() || "";
      return type !== "media partner" && type !== "strategic media partner";
    })
    .map((item) => ({
      name: item.name || "Unnamed",
      description: item.description || "",
      logo: item.logo || null,
      level: item.onboardingSubType || "Partner",
      href: item.website || "#",
    })),
);
</script>

<template>
  <AppContainer class="py-10 md:py-20">
    <section class="mb-16">
      <h1 class="text-4xl font-bold uppercase">PARTNERS</h1>
      <p class="text-sm">2025</p>

      <div v-if="loading" class="text-center py-10">
        <p class="text-lg">Loading partners, please wait...</p>
      </div>

      <div v-else-if="error" class="text-center py-10">
        <p class="text-red-500 mb-4">Failed to load partners.</p>
        <button
          @click="refresh()"
          class="px-4 py-2 bg-black text-white rounded"
        >
          Retry
        </button>
      </div>

      <div v-else-if="partners.length === 0" class="text-center py-10">
        No partners available at the moment.
      </div>

      <div v-else class="sponsorListing__cards">
        <ParticipantCard
          v-for="item in partners"
          :key="item.name"
          v-bind="item"
          type="partner"
        />
      </div>
    </section>

    <RegisterCTA
      :title="`Become A Partner`"
      :description="`Join an elite circle of industry leaders and showcase your brand to over 5,000 top-tier professionals and innovators.`"
      :cta="`Request Partnership Prospectus`"
    />
  </AppContainer>
</template>
