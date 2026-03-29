<script setup>
import RegisterCTA from "~/components/shared/RegisterCTA.vue";
import AppContainer from "~/components/ui/AppContainer.vue";
import ParticipantCard from "~/components/shared/ParticipantCard.vue";

const {
  public: { blobBaseUrl },
} = useRuntimeConfig();

useHead({
  title: "2025 Sponsors | Revive Middle East",
  meta: [
    {
      name: "description",
      content:
        "Longevity Expo sponsorship opportunities await you. Partner with us to elevate your brand in the global health tech landscape.",
    },
  ],
});

const {
  data: apiSponsors,
  pending: loading,
  error,
  refresh,
} = await useFetch(
  `https://revorocrmsgr-ceeuddeqfdevbfas.centralindia-01.azurewebsites.net/OnBoardings/GetByOnBoardingType/Revive ME/2025/Sponsor`,
  {
    key: "sponsors",
    lazy: true,
  },
);

const sponsors = computed(() =>
  (apiSponsors.value || []).map((item) => ({
    name: item.name || "Unnamed",
    description: item.description || "",
    logo: item.logo || null,
    level: item.onboardingSubType || "Sponsor",
    href: item.website || "#",
  })),
);

const getBadgeStyle = (level) => {
  const l = level?.toLowerCase() || "";

  if (l.includes("gold")) {
    return {
      background:
        "linear-gradient(90deg, #caa000 0%, #ffd84d 50%, #caa000 100%)",
    };
  }

  if (l.includes("silver")) {
    return {
      background: "radial-gradient(circle, #f0f0f0 0%, #c0c0c0 100%)",
    };
  }

  if (l.includes("bronze")) {
    return {
      background: "radial-gradient(circle, #f5e1d3 0%, #cd7f32 100%)",
    };
  }

  return {
    background: "radial-gradient(circle, #e6f3ff 0%, #b9dcff 100%)",
  };
};
</script>

<template>
  <AppContainer class="py-10 md:py-20">
    <section class="mb-16">
      <h1 class="text-4xl font-bold uppercase">SPONSORS</h1>
      <p class="text-sm">2025</p>

      <div v-if="loading" class="text-center py-10">
        <p class="text-lg">Loading sponsors, please wait...</p>
      </div>

      <div v-else-if="error" class="text-center py-10">
        <p class="text-red-500 mb-4">Failed to load sponsors.</p>
        <button
          @click="refresh()"
          class="px-4 py-2 bg-black text-white rounded"
        >
          Retry
        </button>
      </div>

      <div v-else-if="sponsors.length === 0" class="text-center py-10">
        No sponsors available at the moment.
      </div>

      <div v-else class="sponsorListing__cards">
        <ParticipantCard
          v-for="item in sponsors"
          :key="item.name"
          v-bind="item"
          :badgeStyle="getBadgeStyle(item.level)"
          type="sponsor"
        />
      </div>
    </section>

    <RegisterCTA
      :title="`Become A Sponsor`"
      :description="`Join an elite circle of industry leaders and showcase your brand to over 5,000 top-tier professionals and innovators.`"
      :cta="`Request Sponsorship Prospectus`"
    />
  </AppContainer>
</template>
