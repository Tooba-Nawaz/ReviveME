<script setup>
import AppContainer from "../ui/AppContainer.vue";

const expectedNumbers = [
  { number: "1500+", description: "Change Makers Under One Roof" },
  { number: "80+", description: "Leading Innovation Showcases" },
  { number: "100+", description: "Voices That Matter" },
  { number: "50+", description: "Media & Supporting Partners" },
  { number: "700+", description: "Global & Regional Brands" },
  { number: "$500M+", description: "Investment Discussions" },
  { number: "10MN+", description: "Advertising Value Equivalency" },
  { number: "500+", description: "C-Suite & Senior Leaders" },
];
</script>

<template>
  <section class="expected-bg">
    <div class="orb orb-left"></div>
    <div class="orb orb-right"></div>
    <AppContainer class="content-wrapper">
      <h1 class="expected-title">WHAT TO EXPECT</h1>
      <h1 class="text-lg">The Scale & Scope of Revive ME 2026</h1>
      <div class="expected-wrapper">
        <div v-for="(item, index) in expectedNumbers" :key="index">
          <h1 class="expected-number">
            {{ item.number }}
          </h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
