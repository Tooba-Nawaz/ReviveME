<script setup>
import AppContainer from "../ui/AppContainer.vue";
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();

const whatsOnItems = [
  {
    title: "Keynote Presentations",
    description:
      "Research insights and market analysis from industry authorities",
  },
  {
    title: "Expert <br> Panels",
    description:
      "Strategic discussions addressing sector challenges and opportunities ",
  },
  {
    title: "business Matchmaking",
    description: "Structured networking connecting complementary stakeholders",
  },
  {
    title: "startup competition",
    description:
      "Investment-ready companies presenting to institutional capital providers",
  },
  {
    title: "strategic meetings",
    description:
      "Pre-scheduled one-to-one engagements with qualified counterparties",
  },
  {
    title: "partnership signings",
    description: "MOU ceremonies and commercial agreement formalization",
  },
  {
    title: "professional development",
    description: "Accredited workshops and technical masterclasses",
  },
  {
    title: "policy roundtables",
    description: "Government-industry dialogue shaping regulatory frameworks",
  },
];
</script>

<template>
  <section class="whats-on">
    <div class="orb orb-left"></div>
    <div class="orb orb-right"></div>

    <AppContainer class="content-wrapper">
      <h1 class="whats-on-title">What's On</h1>
      <div class="whats-on-grid">
        <div
          v-for="(item, index) in whatsOnItems"
          class="whats-on-wrapper group"
        >
          <NuxtImg
            :src="`${blobBaseUrl}/images/home-whats-on/${index + 1}.webp`"
            class="w-full h-full object-cover"
            loading="lazy"
          />

          <div class="whats-on-title-wrapper">
            <h3 class="whats-on-item-title" v-html="item.title"></h3>
          </div>
          <div class="whats-on-description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
