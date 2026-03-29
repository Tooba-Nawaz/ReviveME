<script setup>
const props = defineProps({
  id: [String, Number],
  title: String,
  loadingText: String,
  errorText: String,
  aboutTitle: {
    type: String,
    default: "About the Speaker",
  },
});

const route = useRoute();

const {
  public: { blobBaseUrl },
} = useRuntimeConfig();

const {
  data: speaker,
  pending: loading,
  error,
} = await useFetch(
  `https://revorocrmsgr-ceeuddeqfdevbfas.centralindia-01.azurewebsites.net/OnBoardings/GetByOnBoarding/${route.params.id}`,
);
</script>

<template>
  <section
    class="speaker-detailspage-bg"
    :style="{
      backgroundImage: `url(${blobBaseUrl}/images/speakers-bg.webp)`,
    }"
  >
    <div class="speaker-details__page-container">
      <div class="speaker-details__backButton-wrapper">
        <button class="speaker-details__back-button" @click="$router.back()">
          <Icon name="material-symbols:arrow-left-alt" />
        </button>

        <h2 class="speaker-details__page-title">
          {{ title }}
        </h2>
      </div>

      <div v-if="loading" class="text-center py-10">
        {{ loadingText }}
      </div>

      <div v-else-if="error" class="text-center py-10">
        {{ errorText }}
      </div>

      <div v-else>
        <div class="speaker-details__grid">
          <div class="speaker-details__speakerImage-wrapper">
            <div class="speaker-details__speakerImage-bg">
              <img
                v-if="speaker?.profilePhoto"
                :src="speaker.profilePhoto"
                :alt="speaker.name"
                class="speaker-details__speaker-image"
              />
            </div>
          </div>

          <div class="max-w-xs">
            <h3 class="speaker-details__speaker-name">{{ speaker?.name }}</h3>

            <h2
              class="speaker-details__speaker-designation"
              v-html="speaker?.designation"
            ></h2>

            <p v-html="speaker?.organization"></p>

            <div class="speaker-details__speakerLogo-wrapper">
              <div v-if="speaker?.logo" class="speaker-details__speakerLogo-bg">
                <img
                  :src="speaker.logo"
                  class="speaker-details__speaker-logo"
                />
              </div>

              <a
                v-if="speaker?.linkedIn"
                :href="speaker.linkedIn"
                target="_blank"
                :class="[
                  'flex items-center gap-3',
                  speaker?.logo ? 'ml-auto mt-auto' : '',
                ]"
              >
                <Icon
                  name="skill-icons:linkedin"
                  class="w-8 h-8 rounded-full"
                />
              </a>
            </div>
          </div>
        </div>

        <div v-if="speaker?.bio" class="speaker-details__speakerBio-wrapper">
          <h4 class="speaker-details__about-title">
            {{ aboutTitle }}
          </h4>

          <div v-html="speaker.bio" class="speaker-details__speaker-bio"></div>
        </div>
      </div>
    </div>
  </section>
</template>
