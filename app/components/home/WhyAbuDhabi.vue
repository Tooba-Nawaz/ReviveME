<script setup>
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();

const whyAbuDhabi = [
  {
    title: "$600+ Billion Global <br> Market Opportunity",
    description:
      "The global longevity and healthy aging market is experiencing unprecedented growth, with wellness, preventive health, biotech therapeutics, and AI-driven diagnostics converging to create a multi-hundred-billion-dollar opportunity by 2030.",
  },
  {
    title: "Advanced Health Tech <br> Infrastructure",
    description:
      "State-of-the-art longevity clinics, biohacking centers, AI-powered diagnostic facilities, wellness innovation hubs, and dedicated life sciences clusters including Masdar City's HELM hub and Hub71+ Life Sciences enable seamless innovation from research to real-world health impact.",
  },
  {
    title: "$25.6 Billion HELM Vision",
    description:
      "Abu Dhabi's Health, Endurance, Longevity, and Medicine (HELM) Cluster positions the emirate as a global leader in longevity science, health tech, and life sciences innovation, projected to contribute $25.6B to GDP and attract $11.4 billion in investment by 2045.",
  },
  {
    title: "Genomics & Precision <br> Health Leadership",
    description:
      "The Emirati Genome Programme has sequenced over 403,000 genome samples, powering AI-driven diagnostics, personalized wellness interventions, and precision health models that position Abu Dhabi at the forefront of data-driven longevity medicine.",
  },
  {
    title: "World's First Regulated <br> Longevity Medicine Centre",
    description:
      "The Institute for Healthier Living Abu Dhabi (IHLAD) is the world's first specialized healthy longevity medicine centre approved by the Department of Health - Abu Dhabi,establishing new global standards for precision longevity care and preventive health.",
  },
];

import AppContainer from "../ui/AppContainer.vue";
</script>

<template>
  <section
    class="why-abu-dhabi-bg"
    :style="{
      backgroundImage: `url(${blobBaseUrl}/images/why-abu-dhabi-bg.webp)`,
    }"
  >
    <AppContainer>
      <div class="why-abu-dhabi-grid">
        <h1 class="why-abu-dhabi-title">
          WHY <br />
          <span class="text-[var(--primary)]">ABU DHABI?</span>
        </h1>
        <div
          v-for="(item, index) in whyAbuDhabi"
          :key="index"
          class="why-abu-dhabi-wrapper"
        >
          <NuxtImg
            :src="`${blobBaseUrl}/images/why-abu-dhabi/${index + 1}.png`"
            loading="lazy"
          />
          <h1 class="my-2" v-html="item.title"></h1>
          <p class="text-[var(--gray)]">{{ item.description }}</p>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
