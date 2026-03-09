<script setup>
import AppContainer from "../ui/AppContainer.vue";
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();

const attendees = [
  "Pharmaceutical & Biotech Companies",
  "Longevity Biotech Startups",
  "Precision Medicine & Genomics Experts",
  "Digital Health & Wearable Tech Leaders",
  "Aesthetic Medicine & Anti-Aging Clinics",
  "Wellness & Biohacking Pioneers",
  "Nutrition & Supplement Companies",
  "Longevity Medicine Practitioners",
  "Government Health Leaders & Regulators",
  "Preventive Medicine Physicians",
  "Health Tech & AI Platform Developers",
  "Longevity Investors & VCs",
];
</script>

<template>
  <section class="attendees-bg">
    <div class="orb orb-left"></div>
    <div class="orb orb-right"></div>

    <AppContainer class="content-wrapper">
      <div class="grid lg:grid-cols-3 gap-10">
        <div>
          <span class="edition-number">2026</span>
          <h1 class="attendees-title">WHO ATTENDS</h1>
          <h1 class="revive-title">REVIVE ME</h1>
        </div>
        <div class="col-span-2">
          <div class="inline-grid md:grid-cols-2 md:gap-x-2 gap-y-6">
            <div
              v-for="(item, index) in attendees"
              :key="index"
              class="attendees-item-wrapper"
            >
              <NuxtImg
                :src="`${blobBaseUrl}/images/attendee-icons/${index + 1}.png`"
                loading="lazy"
              ></NuxtImg>
              <p class="ps-2">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
