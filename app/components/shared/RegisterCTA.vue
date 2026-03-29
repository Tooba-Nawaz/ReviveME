<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Become A Sponsor",
  },
  description: {
    type: String,
    default:
      "Join an elite circle of industry leaders and showcase your brand to over 5,000 top-tier professionals and innovators.",
  },
  cta: {
    type: String,
    default: "",
  },
});
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();
</script>

<template>
  <section
    class="cta"
    :style="{
      backgroundImage: `url(${blobBaseUrl}/images/register-cta-bg.webp)`,
    }"
  >
    <div class="cta__overlay">
      <h2 class="cta__title">{{ title }}</h2>

      <p class="cta__desc">
        {{ description }}
      </p>

      <div class="button-wrapper">
        <UiButton variant="white" size="small" shape="pill" to="/register">
          {{ cta }}
        </UiButton>

        <UiButton
          variant="border-white"
          size="small"
          shape="pill"
          to="/register"
        >
          Contact Sales
        </UiButton>
      </div>
    </div>
  </section>
</template>
