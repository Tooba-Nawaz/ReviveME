<script setup>
import AppContainer from "../ui/AppContainer.vue";
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();
</script>

<template>
  <section
    class="home-about-bg"
    :style="{
      backgroundImage: `url(${blobBaseUrl}/images/home-about-bg.webp)`,
    }"
  >
    <AppContainer>
      <div class="home-about-grid">
        <div>
          <h1 class="home-about-title">
            Advancing Human Healthspan <br />
            Through Science, Investment & Global Collaboration
          </h1>
          <p>
            The global longevity and health tech sector has passed a critical
            inflection point. What once lived in laboratories is now reshaping
            clinical practice, attracting billions in investment, and
            fundamentally changing how we age.
          </p>
          <br />

          <p>
            Revive ME 2026 builds on the momentum established by the inaugural
            edition in 2025, which successfully convened the longevity and
            personalized health community in Abu Dhabi and set a strong
            foundation for long-term growth.
          </p>
          <br />
          <p>
            The event brings together global pioneers, investors, clinicians,
            and innovators who are turning breakthrough science into
            breakthrough health outcomes. Build your network. Discover
            next-generation therapies. Forge partnerships that matter.
          </p>
        </div>
        <div>
          <NuxtImg
            :src="`${blobBaseUrl}/images/home-about.webp`"
            class="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </AppContainer>
  </section>
</template>
