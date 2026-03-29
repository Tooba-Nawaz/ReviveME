<script setup>
import { ref } from "vue";
import AppContainer from "../ui/AppContainer.vue";
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="navbar-container">
    <AppContainer>
      <div class="nav-lg-grid">
        <NuxtLink to="/" @click="isOpen = false" class="flex items-center">
          <NuxtImg
            :src="`${blobBaseUrl}/images/logo.png`"
            alt="Revive ME"
            class="w-[90px] lg:w-[100px]"
            loading="lazy"
          />
        </NuxtLink>

        <div class="nav-items-lg-wrapper">
          <NuxtLink to="/about"> About </NuxtLink>
          <NuxtLink to="/exhibition/why-exhibit"> Exhibition </NuxtLink>
          <NuxtLink to="/sponsors/why-sponsor"> Sponsor </NuxtLink>
          <NuxtLink to="/conference/why-attend"> Conference </NuxtLink>
          <NuxtLink to="/"> Partners </NuxtLink>
          <NuxtLink to="/"> Info Hub </NuxtLink>
        </div>
        <div class="nav-lg-button">
          <UiButton variant="primary" size="regular" shape="pill" to="/register"
            >ENQUIRE NOW</UiButton
          >
        </div>

        <button @click="toggleMenu" class="lg:hidden outline outline-white">
          <svg
            v-if="!isOpen"
            class="h-6 w-6"
            fill="none"
            stroke="#fff"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            stroke="#fff"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="lg:hidden">
        <div class="nav-items-sm-wrapper">
          <NuxtLink @click="isOpen = false" to="/about"> About </NuxtLink>
          <NuxtLink @click="isOpen = false" to="/"> Exhibition </NuxtLink>
          <NuxtLink @click="isOpen = false" to="/"> Conference </NuxtLink>
          <NuxtLink @click="isOpen = false" to="/"> Partners </NuxtLink>
          <NuxtLink @click="isOpen = false" to="/"> Info Hub </NuxtLink>
        </div>
        <div class="w-fit py-4">
          <UiButton variant="primary" size="regular" shape="pill" to="/register"
            >ENQUIRE NOW</UiButton
          >
        </div>
      </div>
    </AppContainer>
  </nav>
</template>
