<script setup>
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();
</script>

<template>
  <section
    class="hero-bg"
    :style="{
      backgroundImage: `url(${blobBaseUrl}/images/home-hero.webp)`,
    }"
  >
    <div class="hero-wrapper">
      <h1 class="hero-title">
        Region's Premier <br />
        Longevity and Health <br />
        Tech Exhibition & Conference
      </h1>

      <div class="w-max">
        <div class="grid grid-cols-2 gap-4">
          <UiButton
            variant="primary"
            size="regular"
            shape="pill"
            to="/register"
          >
            Exhibit
          </UiButton>

          <UiButton
            variant="transparent"
            size="regular"
            shape="pill"
            to="/register"
          >
            ENQUIRE NOW
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>
