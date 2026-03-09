<script setup>
import AppContainer from "../ui/AppContainer.vue";
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();
</script>

<template>
  <section class="gallery-bg">
    <AppContainer>
      <h1 class="gallery-title">GALLERY</h1>
      <div class="gallery-grid">
        <NuxtImg
          v-for="index in 6"
          :key="index"
          :src="`${blobBaseUrl}/images/home-gallery/${index}.webp`"
          class="w-full"
          loading="lazy"
        />
      </div>
    </AppContainer>
  </section>
</template>
