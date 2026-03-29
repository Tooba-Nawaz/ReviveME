<script setup>
defineProps({
  item: Object,
  linkBase: String,
});
</script>

<template>
  <div class="speakerCard-wrapper">
    <div class="speakerCard-top">
      <div
        class="speakerImage-bg"
        style="background: linear-gradient(14deg, #f52676 0%, #000 100%)"
      >
        <img
          v-if="item.profilePhoto"
          :src="item.profilePhoto"
          :alt="item.name"
          class="speaker-image"
        />
      </div>
    </div>

    <div class="speakerCard-bottom">
      <div class="flex-grow">
        <h6 class="speaker-name" v-html="item.name"></h6>
        <p class="speaker-designation" v-html="item.designation"></p>
        <p class="speaker-org" v-html="item.organization"></p>
      </div>

      <div class="speakerBottom-detailsWrapper">
        <div v-if="item.logo" class="speakerLogo-wrapper">
          <img :src="item.logo" class="speaker-logo" />
        </div>

        <NuxtLink :to="`${linkBase}/${item.id}`" class="viewBio-wrapper">
          VIEW BIO
          <Icon name="material-symbols:arrow-forward-rounded" class="ms-1" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
